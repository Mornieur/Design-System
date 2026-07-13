'use client';

import { Suspense, useId, useState } from 'react';
import type { ComponentExampleDefinition } from '@/app/_content/components';
import { exampleRenderers } from './examples/exampleRenderers';
import CopyCodeButton from './CopyCodeButton';

type ComponentExampleSectionProps = {
  componentSlug: string;
  example: ComponentExampleDefinition;
  storybookUrl: string;
  compact?: boolean;
  hideOpenExample?: boolean;
};

export default function ComponentExampleSection({
  componentSlug,
  example,
  storybookUrl,
  compact = false,
  hideOpenExample = false
}: ComponentExampleSectionProps) {
  const previewPanelId = useId();
  const codePanelId = useId();
  const [activePanel, setActivePanel] = useState<'preview' | 'code'>('preview');
  const PreviewRenderer = exampleRenderers[example.previewKey];

  return (
    <article className={`component-example-shell${compact ? ' component-example-shell-compact' : ''}`}>
      <div className="component-example-copy">
        <span className="eyebrow">Example</span>
        <h3>{example.title}</h3>
        <p>{example.description}</p>
        {example.accessibilityNotes?.length ? (
          <div className="component-example-notes">
            <strong>Accessibility notes</strong>
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
              Preview
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
              Code
            </button>
          </div>

          <div className="component-example-actions">
            <CopyCodeButton code={example.code} />
            {hideOpenExample ? null : (
              <a
                className="component-example-action"
                href={`/examples/${example.routeSlug}`}
                target="_blank"
                rel="noreferrer"
              >
                Open example
              </a>
            )}
            <a
              className="component-example-action"
              href={storybookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Storybook
            </a>
          </div>
        </div>

        <div
          id={previewPanelId}
          role="tabpanel"
          aria-labelledby={`${previewPanelId}-tab`}
          hidden={activePanel !== 'preview'}
          className="component-example-panel"
        >
          <div className={`component-preview-stage component-preview-stage-${componentSlug}`}>
            <Suspense fallback={<p className="component-preview-loading">Loading preview…</p>}>
              <PreviewRenderer />
            </Suspense>
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
              <span className="docs-code-label">tsx</span>
              <span className="docs-code-note">Static example source</span>
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
