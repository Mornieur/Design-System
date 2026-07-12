import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
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

  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: entry.title }
          ]}
        />
        <PageHeader
          eyebrow={`${entry.kind} detail`}
          title={entry.title}
          description={entry.summary}
          meta={[entry.storybookStatus, 'Catalog page']}
        />
      </div>

      <section className="page-section">
        <h2>API notes</h2>
        <ul className="bullet-list">
          {entry.apiNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>Documentation notes</h2>
        <ul className="bullet-list">
          {entry.documentationNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </DocsScaffold>
  );
}
