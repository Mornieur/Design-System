import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import { foundationEntries, getFoundationEntry } from '@/app/_content/foundations';

type FoundationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return foundationEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params
}: FoundationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getFoundationEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title
  };
}

export default async function FoundationDetailPage({
  params
}: FoundationDetailPageProps) {
  const { slug } = await params;
  const entry = getFoundationEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Foundations', href: '/foundations' },
            { label: entry.title }
          ]}
        />
        <PageHeader
          eyebrow="Foundation detail"
          title={entry.title}
          description={entry.summary}
          meta={[entry.status, 'Typed static page']}
        />
      </div>

      <section className="page-section">
        <h2>Principles</h2>
        <ul className="bullet-list">
          {entry.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>Repository references</h2>
        <ul className="bullet-list">
          {entry.references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </section>
    </DocsScaffold>
  );
}
