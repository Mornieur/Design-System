import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';

export const metadata: Metadata = {
  title: 'Architecture'
};

const architectureDecisions = [
  ['Source of truth', 'Repository code and Storybook remain authoritative for component behavior.'],
  ['Rendering', 'Static App Router pages for repository-owned content.'],
  ['Content model', 'Typed registries under src/app/_content instead of CMS or MDX runtime.'],
  ['Integration boundary', 'Next app consumes package primitives but does not publish them.']
] as const;

export default function ArchitecturePage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Architecture' }]} />
        <PageHeader
          eyebrow="System"
          title="Documentation architecture in phase one"
          description="The site shell establishes stable routes, a content registry, and a local visual system while keeping Storybook primary and package exports unchanged."
          meta={['No CMS', 'No ISR', 'No remote content']}
        />
      </div>

      <section className="page-section">
        <h2>Decision summary</h2>
        <div className="key-value-grid">
          {architectureDecisions.map(([label, value]) => (
            <article key={label}>
              <strong>{label}</strong>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Turbopack audit outcome</h2>
        <ul className="bullet-list">
          <li>The existing development script already runs with Turbopack.</li>
          <li>The shell avoids experimental content layers that would complicate Turbopack in phase one.</li>
          <li>MDX is configured but intentionally not used until version alignment is reviewed more deeply.</li>
        </ul>
      </section>
    </DocsScaffold>
  );
}
