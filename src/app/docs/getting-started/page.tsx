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
          title="Getting started with FeitozaUI consumers"
          description="FeitozaUI is still unpublished, but the package has now been verified as a real tarball consumer in React + Vite and Next.js App Router."
          meta={['Internal tarball verification complete', 'No npm publish yet', 'Root import validated']}
        />
      </div>

      <section className="page-section">
        <h2>Current state</h2>
        <ul className="bullet-list">
          <li>The package target remains <code>@feitoza-ui/core</code>.</li>
          <li>The package is not published on npm yet, so public install commands are still future-facing.</li>
          <li>Internal consumer verification now proves the package can be installed from a real tarball outside the source repository.</li>
          <li>The core package is verified as React-first, not Next-specific, so Next.js remains a consumer choice instead of a package requirement.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Verified consumers</h2>
        <ul className="bullet-list">
          <li><strong>React + Vite</strong>: verified with root imports, public tokens, refs, native HTML props, click handling, and production build.</li>
          <li><strong>Next.js App Router</strong>: verified with a Server Component page, a client island importing the package root, styled-components SSR registry, Turbopack dev, Webpack fallback dev, and production build.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Future installation after publication</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">React + Vite</span>
              <span className="docs-code-note">After npm publication</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`npm install @feitoza-ui/core styled-components`}</code>
            </pre>
          </div>

          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">Next.js App Router</span>
              <span className="docs-code-note">After npm publication</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`npm install @feitoza-ui/core styled-components`}</code>
            </pre>
          </div>
        </div>
        <p className="table-note">
          These commands describe the intended public install flow after publication. They are not
          advertised as usable today.
        </p>
        <ul className="bullet-list">
          <li>Consumers are expected to already own their framework runtime dependencies such as <code>react</code> and <code>react-dom</code>.</li>
          <li><code>styled-components</code> remains a required peer dependency for the current public component surface.</li>
          <li><code>next</code> is required only by Next.js apps themselves, not by the FeitozaUI core package.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Internal validation flow</h2>
        <ul className="bullet-list">
          <li>The repository builds the library with <code>yarn.cmd build</code>.</li>
          <li>A real tarball is generated with <code>npm.cmd pack</code>.</li>
          <li>The tarball is installed into permanent consumers under <code>consumer-tests/</code>.</li>
          <li>The consumers validate types, public imports, and production builds without reading <code>src/</code> directly.</li>
          <li>The dependency tree is also checked so the React + Vite consumer does not inherit <code>next</code> from the core package.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Framework support matrix</h2>
        <div className="docs-guidance-grid">
          <div className="docs-guidance-card">
            <h3>Verified</h3>
            <ul className="bullet-list">
              <li>React + Vite</li>
              <li>Next.js App Router</li>
            </ul>
          </div>

          <div className="docs-guidance-card">
            <h3>Not verified</h3>
            <ul className="bullet-list">
              <li>React Router</li>
              <li>Remix</li>
              <li>Astro with React</li>
            </ul>
          </div>
        </div>

        <div className="docs-guidance-card">
          <h3>Not supported directly</h3>
          <ul className="bullet-list">
            <li>Nuxt</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>Svelte</li>
          </ul>
          <p>
            FeitozaUI components are React components. The current token exports are not packaged
            today as a separate framework-agnostic distribution.
          </p>
        </div>
      </section>
    </DocsScaffold>
  );
}
