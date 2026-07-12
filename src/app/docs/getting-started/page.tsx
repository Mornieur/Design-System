import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';

export const metadata: Metadata = {
  title: 'Getting Started'
};

export default function GettingStartedPage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Getting Started' }
          ]}
        />
        <PageHeader
          eyebrow="Core docs"
          title="Getting started with the documentation shell"
          description="This site introduces the architecture, navigation model, and package boundaries for FeitozaUI without replacing Storybook as the primary documentation product."
          meta={['Static route', 'Server component', 'Typed content registry']}
        />
      </div>

      <section className="page-section">
        <h2>What this first implementation does</h2>
        <ul className="bullet-list">
          <li>Creates a navigable route structure for documentation, foundations, components, and architecture content.</li>
          <li>Uses local TypeScript registries so content is repository-owned and build-time safe.</li>
          <li>Introduces a local theme toggle and documentation shell styling without touching the package API.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>What it intentionally avoids</h2>
        <ul className="bullet-list">
          <li>Search, CMS, remote data, runtime MDX, ISR, and request-driven rendering.</li>
          <li>Duplicating Storybook examples or migrating component behavior docs away from stories.</li>
          <li>Adding documentation-only variants or exports to the public package.</li>
        </ul>
      </section>
    </DocsScaffold>
  );
}
