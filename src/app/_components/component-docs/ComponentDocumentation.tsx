import Breadcrumbs from '@/app/_components/Breadcrumbs';
import CodeBlock from '@/app/_components/CodeBlock';
import ComponentCardPreview from '@/app/_components/ComponentCardPreview';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import SectionNavigator from '@/app/_components/SectionNavigator';
import {
  getComponentEntries,
  type ComponentEntry
} from '@/app/_content/components';
import {createInstallationCode} from '@/app/_content/components/shared';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
import ComponentExampleSection from './ComponentExampleSection';
import PropsTable from './PropsTable';

type ComponentDocumentationProps = {
  entry: ComponentEntry;
  locale: AppLocale;
};

export default function ComponentDocumentation({
  entry,
  locale
}: ComponentDocumentationProps) {
  const copy =
    locale === 'pt-BR'
      ? {
          home: 'Início',
          components: 'Componentes',
          when: 'Quando usar',
          whenTitle: `Use ${entry.title} quando o papel dele estiver claro no fluxo.`,
          useWhen: 'Use quando',
          avoidWhen: 'Evite quando',
          playground: 'Playground',
          playgroundTitle: 'Comece por um exemplo funcionando.',
          playgroundBody:
            'Veja o componente e inspecione o código no mesmo bloco antes de adaptá-lo ao seu produto.',
          examples: 'Exemplos',
          examplesTitle: 'Veja o componente em mais de um contexto.',
          examplesBody:
            'Os exemplos ficam próximos da API pública para que a página continue útil como material de referência.',
          api: 'API',
          apiTitle: 'Contrato público',
          accessibility: 'Acessibilidade',
          accessibilityTitle: 'Expectativas de comportamento',
          design: 'Boas práticas',
          designTitle: 'Mantenha o componente consistente em interfaces reais.',
          bestPractices: 'Melhores práticas',
          doDont: 'Fazer / evitar',
          related: 'Relacionados',
          relatedTitle: 'Continue navegando pela mesma parte do sistema.',
          installPackage: 'Instalar o pacote',
          importComponent: 'Importar o componente',
          openStorybook: 'Abrir Storybook',
          viewSource: 'Ver código-fonte'
        }
      : {
          home: 'Home',
          components: 'Components',
          when: 'When to use',
          whenTitle: `Use ${entry.title} when the role is clear inside the flow.`,
          useWhen: 'Use when',
          avoidWhen: 'Avoid when',
          playground: 'Playground',
          playgroundTitle: 'Start from a working example.',
          playgroundBody:
            'Preview the component and inspect the code in the same place before adapting it to your product.',
          examples: 'Examples',
          examplesTitle: 'See the component in more than one context.',
          examplesBody:
            'Examples stay close to the public API so the page remains useful as reference material.',
          api: 'API',
          apiTitle: 'Public contract',
          accessibility: 'Accessibility',
          accessibilityTitle: 'Behavioral expectations',
          design: 'Design notes',
          designTitle: 'Keep the component consistent in real interfaces.',
          bestPractices: 'Best practices',
          doDont: "Do / Don't",
          related: 'Related components',
          relatedTitle: 'Keep exploring the same part of the system.',
          installPackage: 'Install the package',
          importComponent: 'Import the component',
          openStorybook: 'Open Storybook',
          viewSource: 'View source'
        };

  const sectionLinks = [
    {href: '#when-to-use', label: copy.when},
    {href: '#playground', label: copy.playground},
    {href: '#examples', label: copy.examples},
    {href: '#api', label: copy.api},
    {href: '#accessibility', label: copy.accessibility},
    {href: '#design-notes', label: copy.design},
    {href: '#related', label: copy.related}
  ] as const;

  const featuredExample =
    entry.examples.find((example) => example.id === entry.featuredExampleId) ??
    entry.examples[0];
  const compositionExamples = entry.examples.filter(
    (example) =>
      example.category === 'composition' && example.id !== featuredExample.id
  );
  const interactiveExamples = entry.examples.filter(
    (example) =>
      example.category === 'interactive' && example.id !== featuredExample.id
  );
  const relatedEntries = getComponentEntries(locale).filter((candidate) =>
    entry.relatedComponentSlugs.includes(candidate.slug)
  );

  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[
            {label: copy.home, href: '/'},
            {label: copy.components, href: '/components'},
            {label: entry.title}
          ]}
        />
        <PageHeader
          eyebrow={entry.kind}
          title={entry.title}
          description={entry.description}
        />
        <SectionNavigator items={[...sectionLinks]} />
      </div>

      <section id="when-to-use" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.when}</p>
          <h2>{copy.whenTitle}</h2>
        </div>
        <p>{entry.usageSummary}</p>
        <div className="docs-guidance-grid">
          <div className="docs-guidance-card">
            <h3>{copy.useWhen}</h3>
            <ul className="bullet-list">
              {entry.useWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="docs-guidance-card">
            <h3>{copy.avoidWhen}</h3>
            <ul className="bullet-list">
              {entry.avoidWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="playground" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.playground}</p>
          <h2>{copy.playgroundTitle}</h2>
          <p>{copy.playgroundBody}</p>
        </div>

        <ComponentExampleSection
          componentSlug={entry.slug}
          example={featuredExample}
          storybookUrl={entry.storybook?.url}
          compact
          locale={locale}
        />
      </section>

      <section id="examples" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.examples}</p>
          <h2>{copy.examplesTitle}</h2>
          <p>{copy.examplesBody}</p>
        </div>

        <div className="docs-code-stack docs-code-stack-inline">
          <CodeBlock
            code={createInstallationCode()}
            label="npm"
            note={copy.installPackage}
          />
          <CodeBlock
            code={entry.importPath}
            label="tsx"
            note={copy.importComponent}
          />
        </div>
        <div className="docs-example-stack">
          {compositionExamples.map((example) => (
            <ComponentExampleSection
              key={example.id}
              componentSlug={entry.slug}
              example={example}
              storybookUrl={entry.storybook?.url}
              locale={locale}
            />
          ))}
        </div>
        <div className="docs-example-stack">
          {interactiveExamples.map((example) => (
            <ComponentExampleSection
              key={example.id}
              componentSlug={entry.slug}
              example={example}
              storybookUrl={entry.storybook?.url}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section id="api" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.api}</p>
          <h2>{copy.apiTitle}</h2>
        </div>
        <PropsTable
          definition={entry.propsDefinition}
          componentTitle={entry.title}
          locale={locale}
        />
      </section>

      <section id="accessibility" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.accessibility}</p>
          <h2>{copy.accessibilityTitle}</h2>
        </div>
        <ul className="bullet-list">
          {entry.accessibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="design-notes" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.design}</p>
          <h2>{copy.designTitle}</h2>
        </div>
        <div className="docs-guidance-grid">
          <div className="docs-guidance-card">
            <h3>{copy.bestPractices}</h3>
            <ul className="bullet-list">
              {entry.bestPractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="docs-guidance-card">
            <h3>{copy.doDont}</h3>
            <ul className="bullet-list">
              {[...entry.doItems, ...entry.dontItems].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="related" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.related}</p>
          <h2>{copy.relatedTitle}</h2>
        </div>
        <div className="card-grid card-grid-two">
          {relatedEntries.map((relatedEntry) => (
            <Link
              key={relatedEntry.slug}
              className="content-card-link"
              href={`/components/${relatedEntry.slug}`}
            >
              <article className="content-card content-card-compact related-component-card">
                <div className="content-card-header">
                  <div>
                    <h3>{relatedEntry.title}</h3>
                    <span className="content-card-eyebrow">{relatedEntry.kind}</span>
                  </div>
                  <span className="related-component-arrow">↗</span>
                </div>
                <ComponentCardPreview slug={relatedEntry.slug} />
                <p>{relatedEntry.description}</p>
              </article>
            </Link>
          ))}
        </div>
        <div className="docs-links-row">
          {entry.storybook ? (
            <a
              className="button-link button-link-secondary"
              href={entry.storybook.url}
              target="_blank"
              rel="noreferrer"
            >
              {copy.openStorybook}
            </a>
          ) : null}
          <a
            className="button-link button-link-secondary"
            href={entry.source.url}
            target="_blank"
            rel="noreferrer"
          >
            {copy.viewSource}
          </a>
        </div>
      </section>
    </DocsScaffold>
  );
}
