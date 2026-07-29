'use client';

import { useId, useState } from 'react';
import type {AppLocale} from '@/i18n/routing';
import type { ComponentExampleDefinition } from '@/app/_content/components';
import {Link} from '@/i18n/navigation';
import { exampleRenderers } from './examples/exampleRenderers';
import CopyCodeButton from './CopyCodeButton';

type ComponentExampleSectionProps = {
  componentSlug: string;
  example: ComponentExampleDefinition;
  storybookUrl?: string;
  compact?: boolean;
  hideOpenExample?: boolean;
  locale: AppLocale;
};

export default function ComponentExampleSection({
  componentSlug,
  example,
  storybookUrl,
  compact = false,
  hideOpenExample = false,
  locale
}: ComponentExampleSectionProps) {
  const previewPanelId = useId();
  const codePanelId = useId();
  const [activePanel, setActivePanel] = useState<'preview' | 'code'>('preview');
  const PreviewRenderer = exampleRenderers[example.previewKey];
  const copy =
    locale === 'pt-BR'
      ? {
          composition: 'Exemplo de composicao',
          interactive: 'Exemplo interativo',
          accessibility: 'Notas de acessibilidade',
          preview: 'Preview',
          code: 'Codigo',
          openExample: 'Abrir exemplo',
          staticSource: 'Fonte estatica do exemplo'
        }
      : {
          composition: 'Composition example',
          interactive: 'Interactive example',
          accessibility: 'Accessibility notes',
          preview: 'Preview',
          code: 'Code',
          openExample: 'Open example',
          staticSource: 'Static example source'
        };

  return (
    <article
      className={`component-example-shell${compact ? ' component-example-shell-compact' : ''}`}
    >
      <div className="component-example-copy">
        <div className="component-example-copy-topline">
          <span className="eyebrow">
            {example.category === 'composition'
              ? copy.composition
              : copy.interactive}
          </span>
        </div>
        <h3>{example.title}</h3>
        <p>{example.description}</p>
        {example.accessibilityNotes?.length ? (
          <div className="component-example-notes">
            <strong>{copy.accessibility}</strong>
            <ul className="bullet-list">
              {example.accessibilityNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="component-example-console">
        <div className="component-example-toolbar">
          <div
            className="component-example-tabs"
            role="tablist"
            aria-label={`${example.title} preview and code`}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activePanel === 'preview'}
              aria-controls={previewPanelId}
              id={`${previewPanelId}-tab`}
              className="component-example-tab"
              onClick={() => setActivePanel('preview')}
            >
              {copy.preview}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activePanel === 'code'}
              aria-controls={codePanelId}
              id={`${codePanelId}-tab`}
              className="component-example-tab"
              onClick={() => setActivePanel('code')}
            >
              {copy.code}
            </button>
          </div>

          <div className="component-example-actions">
            <CopyCodeButton code={example.code} />
            {hideOpenExample ? null : (
              <Link
                className="component-example-action"
                href={`/examples/${example.routeSlug}`}
                target="_blank"
                rel="noreferrer"
              >
                {copy.openExample}
              </Link>
            )}
            {storybookUrl ? (
              <a
                className="component-example-action"
                href={storybookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Storybook
              </a>
            ) : null}
          </div>
        </div>

        <div
          id={previewPanelId}
          role="tabpanel"
          aria-labelledby={`${previewPanelId}-tab`}
          hidden={activePanel !== 'preview'}
          className="component-example-panel"
        >
          <div
            className={`component-preview-stage component-preview-stage-${componentSlug}`}
          >
            <PreviewRenderer />
          </div>
        </div>

        <div
          id={codePanelId}
          role="tabpanel"
          aria-labelledby={`${codePanelId}-tab`}
          hidden={activePanel !== 'code'}
          className="component-example-panel"
        >
          <div className="docs-code-frame docs-code-frame-preview">
            <div className="docs-code-header">
              <div className="docs-code-meta">
                <span className="docs-code-label">tsx</span>
                <span className="docs-code-note">{copy.staticSource}</span>
              </div>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{example.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </article>
  );
}
