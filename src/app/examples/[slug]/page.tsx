import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import ComponentExampleSection from '@/app/_components/component-docs/ComponentExampleSection';
import {
  getComponentExampleEntries,
  getComponentExampleEntry
} from '@/app/_content/components';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

type ExampleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getComponentExampleEntries('en').map((entry) => ({
    slug: entry.example.routeSlug
  }));
}

export async function generateMetadata({
  params
}: ExampleDetailPageProps): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  const {slug} = await params;
  const entry = getComponentExampleEntry(locale, slug);

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
  const locale = (await getLocale()) as AppLocale;
  const {slug} = await params;
  const entry = getComponentExampleEntry(locale, slug);

  if (!entry) {
    notFound();
  }

  return (
    <main id="main-content" className="site-main">
      <div className="page-shell narrow-shell">
        <section className="page-section">
          <p className="eyebrow">
            {locale === 'en' ? 'Isolated example' : 'Exemplo isolado'}
          </p>
          <h1>
            {entry.component.title}: {entry.example.title}
          </h1>
          <p className="page-intro">{entry.example.description}</p>
          <div className="docs-links-row">
            <Link
              className="button-link button-link-secondary"
              href={`/components/${entry.component.slug}`}
            >
              {locale === 'en' ? 'Back to component' : 'Voltar para o componente'}
            </Link>
            {entry.component.storybook ? (
              <a
                className="button-link button-link-secondary"
                href={entry.component.storybook.url}
                target="_blank"
                rel="noreferrer"
              >
                Storybook
              </a>
            ) : null}
          </div>
        </section>

        <section className="page-section">
          <ComponentExampleSection
            componentSlug={entry.component.slug}
            example={entry.example}
            storybookUrl={entry.component.storybook?.url}
            compact
            hideOpenExample
            locale={locale}
          />
        </section>
      </div>
    </main>
  );
}
