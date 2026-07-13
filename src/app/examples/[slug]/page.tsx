import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ComponentExampleSection from '@/app/_components/component-docs/ComponentExampleSection';
import { componentExampleEntries, getComponentExampleEntry } from '@/app/_content/components';

type ExampleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return componentExampleEntries.map((entry) => ({
    slug: entry.example.routeSlug
  }));
}

export async function generateMetadata({
  params
}: ExampleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComponentExampleEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: `${entry.component.title} example`,
    description: entry.example.description
  };
}

export default async function ExampleDetailPage({
  params
}: ExampleDetailPageProps) {
  const { slug } = await params;
  const entry = getComponentExampleEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main id="main-content" className="site-main">
      <div className="page-shell narrow-shell">
        <section className="page-section">
          <p className="eyebrow">Isolated example</p>
          <h1>
            {entry.component.title}: {entry.example.title}
          </h1>
          <p className="page-intro">{entry.example.description}</p>
          <div className="docs-links-row">
            <Link className="button-link button-link-secondary" href={`/components/${entry.component.slug}`}>
              Back to component
            </Link>
            <a
              className="button-link button-link-secondary"
              href={entry.component.storybook.url}
              target="_blank"
              rel="noreferrer"
            >
              Open Storybook
            </a>
          </div>
        </section>

        <section className="page-section">
          <ComponentExampleSection
            componentSlug={entry.component.slug}
            example={entry.example}
            storybookUrl={entry.component.storybook.url}
            compact
            hideOpenExample
          />
        </section>
      </div>
    </main>
  );
}
