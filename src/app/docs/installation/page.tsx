import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';

export const metadata: Metadata = {
  title: 'Installation'
};

const peerDependencies = ['react ^18 || ^19', 'react-dom ^18 || ^19', 'styled-components ^6.1.19'];

export default function InstallationPage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Installation' }
          ]}
        />
        <PageHeader
          eyebrow="Core docs"
          title="Installation readiness and package boundary"
          description="The package is not published yet, but the documentation site can already describe the package target, peer dependencies, and what belongs to the library versus the Next app."
          meta={['Package target: @feitoza-ui/core', 'No public API changes']}
        />
      </div>

      <section className="page-section">
        <h2>Current package target</h2>
        <div className="note-box">
          <code>@feitoza-ui/core</code>
        </div>
      </section>

      <section className="page-section">
        <h2>Peer dependency expectations</h2>
        <ul className="bullet-list">
          {peerDependencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>Framework support note</h2>
        <p>
          The Next documentation app is a repository surface, not a package requirement.
          Consumers should continue to see FeitozaUI as a React component library rather than
          a Next-specific system.
        </p>
      </section>
    </DocsScaffold>
  );
}
