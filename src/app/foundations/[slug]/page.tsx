import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import {renderFoundationPreview} from '@/app/_components/FoundationPreview';
import PageHeader from '@/app/_components/PageHeader';
import {
  getFoundationEntries,
  getFoundationEntry
} from '@/app/_content/foundations';
import type {AppLocale} from '@/i18n/routing';

type FoundationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getFoundationEntries('en').map((entry) => ({slug: entry.slug}));
}

export async function generateMetadata({
  params
}: FoundationDetailPageProps): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  const {slug} = await params;
  const entry = getFoundationEntry(locale, slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.summary
  };
}

export default async function FoundationDetailPage({
  params
}: FoundationDetailPageProps) {
  const locale = (await getLocale()) as AppLocale;
  const {slug} = await params;
  const entry = getFoundationEntry(locale, slug);

  if (!entry) {
    notFound();
  }

  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[
            {label: 'Home', href: '/'},
            {label: locale === 'en' ? 'Foundations' : 'Fundamentos', href: '/foundations'},
            {label: entry.title}
          ]}
        />
        <PageHeader
          eyebrow={locale === 'en' ? 'Foundation' : 'Fundamento'}
          title={entry.title}
          description={entry.summary}
        />
      </div>

      <section className="page-section foundation-detail-hero">
        <div className="foundation-detail-copy">
          <div className="section-heading">
            <h2>{entry.detailTitle}</h2>
            <p>{entry.detailIntro}</p>
          </div>
          <div className="docs-guidance-card">
            <p className="content-card-eyebrow">{entry.specimenLabel}</p>
            <h3>{entry.specimenTitle}</h3>
            <p>{entry.specimenBody}</p>
          </div>
        </div>
        <div className="foundation-detail-preview">
          <div className="foundation-detail-preview-frame">
            {renderFoundationPreview(entry.slug)}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <h2>{locale === 'en' ? 'Core principles' : 'Princípios centrais'}</h2>
        </div>
        <div className="docs-guidance-grid">
          {entry.principles.map((principle) => (
            <div key={principle} className="docs-guidance-card">
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <h2>{entry.guidanceTitle}</h2>
        </div>
        <ul className="bullet-list">
          {entry.guidance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </DocsScaffold>
  );
}
