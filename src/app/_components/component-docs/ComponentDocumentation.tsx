import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import type { ComponentEntry } from '@/app/_content/components';
import {
  createInstallationCode,
  packageName
} from '@/app/_content/components/shared';
import ComponentExampleSection from './ComponentExampleSection';
import PropsTable from './PropsTable';

type ComponentDocumentationProps = {
  entry: ComponentEntry;
};

export default function ComponentDocumentation({
  entry
}: ComponentDocumentationProps) {
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
          description={entry.description}
          meta={[entry.status, 'Server component page', 'Examples via client islands']}
        />
      </div>

      <section className="page-section">
        <h2>Overview</h2>
        <p>{entry.overview}</p>
      </section>

      <section className="page-section">
        <h2>Install and import</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">npm</span>
              <span className="docs-code-note">Package target</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{createInstallationCode()}</code>
            </pre>
          </div>

          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">tsx</span>
              <span className="docs-code-note">Import snippet</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{entry.importPath}</code>
            </pre>
          </div>
        </div>

        <p className="table-note">
          The package target is <code>{packageName}</code>. Publishing is still pending, so this
          page documents the intended public import surface without claiming npm availability today.
        </p>
      </section>

      <section className="page-section">
        <div className="docs-split-heading">
          <div>
            <h2>Usage guidance</h2>
            <p className="page-intro">
              The first component documentation pass stays small and honest: real examples, real
              API, no fake playground.
            </p>
          </div>
        </div>

        <div className="docs-guidance-grid">
          <div className="docs-guidance-card">
            <h3>Use when</h3>
            <ul className="bullet-list">
              {entry.useWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="docs-guidance-card">
            <h3>Avoid when</h3>
            <ul className="bullet-list">
              {entry.avoidWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="docs-split-heading">
          <div>
            <h2>Examples</h2>
            <p className="page-intro">
              Preview and code come from the same example definition. The preview render stays
              inside a small client island.
            </p>
          </div>
        </div>

        <div className="docs-example-stack">
          {entry.examples.map((example) => (
            <ComponentExampleSection
              key={example.id}
              componentSlug={entry.slug}
              example={example}
              storybookUrl={entry.storybook.url}
            />
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>API</h2>
        <PropsTable definition={entry.propsDefinition} componentTitle={entry.title} />
      </section>

      <section className="page-section">
        <h2>Accessibility</h2>
        <ul className="bullet-list">
          {entry.accessibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>Links</h2>
        <div className="docs-links-row">
          <a
            className="button-link button-link-secondary"
            href={entry.storybook.url}
            target="_blank"
            rel="noreferrer"
          >
            Open Storybook
          </a>
          <a
            className="button-link button-link-secondary"
            href={entry.source.url}
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>
        </div>
        <ul className="bullet-list">
          <li>Storybook route: <code>{entry.storybook.path}</code></li>
          <li>Source path: <code>{entry.source.path}</code></li>
        </ul>
      </section>
    </DocsScaffold>
  );
}
