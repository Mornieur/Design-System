import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ComponentDocumentation from '@/app/_components/component-docs/ComponentDocumentation';
import { componentEntries, getComponentEntry } from '@/app/_content/components';

type ComponentDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return componentEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params
}: ComponentDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComponentEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title
  };
}

export default async function ComponentDetailPage({
  params
}: ComponentDetailPageProps) {
  const { slug } = await params;
  const entry = getComponentEntry(slug);

  if (!entry) {
    notFound();
  }

  return <ComponentDocumentation entry={entry} />;
}
