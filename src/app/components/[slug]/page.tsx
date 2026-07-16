import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import ComponentDocumentation from '@/app/_components/component-docs/ComponentDocumentation';
import {getComponentEntries, getComponentEntry} from '@/app/_content/components';
import type {AppLocale} from '@/i18n/routing';

type ComponentDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getComponentEntries('en').map((entry) => ({slug: entry.slug}));
}

export async function generateMetadata({
  params
}: ComponentDetailPageProps): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  const {slug} = await params;
  const entry = getComponentEntry(locale, slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description
  };
}

export default async function ComponentDetailPage({
  params
}: ComponentDetailPageProps) {
  const locale = (await getLocale()) as AppLocale;
  const {slug} = await params;
  const entry = getComponentEntry(locale, slug);

  if (!entry) {
    notFound();
  }

  return <ComponentDocumentation entry={entry} locale={locale} />;
}
