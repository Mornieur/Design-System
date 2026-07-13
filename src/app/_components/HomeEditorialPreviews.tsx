'use client';

import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import Surface from '@/components/atoms/Surface';
import Card from '@/components/molecules/Card';
import type { ComponentEntry } from '@/app/_content/components';
import type { FoundationEntry } from '@/app/_content/foundations';

type HomeEditorialPreviewsProps = {
  componentEntries: readonly ComponentEntry[];
  featuredComponents: readonly string[];
  foundationEntries: readonly FoundationEntry[];
};

export default function HomeEditorialPreviews({
  componentEntries,
  featuredComponents,
  foundationEntries
}: HomeEditorialPreviewsProps) {
  const featuredComponentSlugs = new Set<string>(featuredComponents);

  return (
    <>
      <section className="section-stack" aria-labelledby="documentation-surfaces">
        <div className="section-heading">
          <p className="eyebrow">Documentation surfaces</p>
          <h2 id="documentation-surfaces">A calm infrastructure layer for the system</h2>
          <p>
            Storybook remains the primary source for public component behavior. The
            Next app now provides a navigable shell for architecture, foundations,
            installation, and future documentation growth.
          </p>
        </div>
        <div className="card-grid card-grid-three">
          <Surface className="info-card">
            <h3>Storybook stays primary</h3>
            <p>Component states, examples, and behavior documentation remain anchored in stories.</p>
          </Surface>
          <Surface className="info-card">
            <h3>Typed local content</h3>
            <p>Routes are backed by repository-owned registries instead of CMS, MDX, or remote fetching.</p>
          </Surface>
          <Surface className="info-card">
            <h3>Package boundary preserved</h3>
            <p>The documentation shell consumes the library but does not redefine or extend the public API.</p>
          </Surface>
        </div>
      </section>

      <section className="section-stack" aria-labelledby="preview-console">
        <div className="section-heading">
          <p className="eyebrow">Editorial preview</p>
          <h2 id="preview-console">A preview layer, not a second component engine</h2>
          <p>
            The homepage can stage real FeitozaUI primitives to communicate tone,
            hierarchy, and system intent while keeping behavioral depth in Storybook.
          </p>
        </div>
        <Surface className="preview-console">
          <div className="preview-console-copy">
            <span className="preview-console-kicker">Preview node</span>
            <h3>Real package primitives, restrained on purpose</h3>
            <p>
              This shell uses the public library surface as editorial material for
              navigation and system framing, not as a parallel interactive catalog.
            </p>
          </div>
          <div className="preview-console-stage" aria-label="Component preview teaser">
            <Badge variant="info" outlined>
              Surface + Card
            </Badge>
            <div className="preview-console-actions">
              <Button type="button">Primary</Button>
              <Button type="button" variant="secondary">
                Secondary
              </Button>
            </div>
            <Card className="preview-console-card">
              <div className="content-card-header">
                <h3>System preview panel</h3>
                <span className="panel-id">STORYBOUND</span>
              </div>
              <p>
                Behavior examples stay in Storybook. This site owns route clarity,
                context, architecture, and system navigation.
              </p>
            </Card>
          </div>
        </Surface>
      </section>

      <section className="section-stack" aria-labelledby="foundations-preview">
        <div className="section-heading">
          <p className="eyebrow">Foundations</p>
          <h2 id="foundations-preview">Core system pillars now have a technical route model</h2>
        </div>
        <div className="card-grid">
          {foundationEntries.slice(0, 4).map((entry) => (
            <Link key={entry.slug} className="content-card-link" href={`/foundations/${entry.slug}`}>
              <Surface className="content-card">
                <div className="content-card-header">
                  <h3>{entry.title}</h3>
                  <Badge variant="neutral" size="sm">
                    {entry.status}
                  </Badge>
                </div>
                <p>{entry.summary}</p>
              </Surface>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-stack" aria-labelledby="components-preview">
        <div className="section-heading">
          <p className="eyebrow">Components</p>
          <h2 id="components-preview">The first catalog routes reflect the real public surface</h2>
        </div>
        <div className="card-grid card-grid-two">
          {componentEntries
            .filter((entry) => featuredComponentSlugs.has(entry.slug))
            .map((entry) => (
              <Link key={entry.slug} className="content-card-link" href={`/components/${entry.slug}`}>
                <Card className="content-card elevated-card">
                  <div className="content-card-header">
                    <h3>{entry.title}</h3>
                    <Badge variant="primary" size="sm">
                      {entry.kind}
                    </Badge>
                  </div>
                  <p>{entry.description}</p>
                  <span className="content-card-meta">{entry.status}</span>
                </Card>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
