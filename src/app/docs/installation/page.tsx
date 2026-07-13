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
          title="Installation guidance and verified setup"
          description="The package is still unpublished, but the install path, peer dependency expectations, and verified consumer boundaries are now documented from real external-package checks."
          meta={['Package target: @feitoza-ui/core', 'Tarball consumers validated']}
        />
      </div>

      <section className="page-section">
        <h2>Package target</h2>
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
        <p className="table-note">
          The core package does not require consumers to install <code>next</code>. Next remains a
          dependency only of Next.js applications themselves.
        </p>
      </section>

      <section className="page-section">
        <h2>React + Vite setup</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">npm</span>
              <span className="docs-code-note">After publication</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`npm install @feitoza-ui/core styled-components`}</code>
            </pre>
          </div>

          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">tsx</span>
              <span className="docs-code-note">Validated root import pattern</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Surface,
  colors,
  space
} from '@feitoza-ui/core';`}</code>
            </pre>
          </div>
        </div>
        <ul className="bullet-list">
          <li>No CSS global import is required by the package in the verified Vite consumer.</li>
          <li>The consumer remains responsible for any custom font loading if it wants the exact FeitozaUI typography stack.</li>
          <li>Public tokens such as <code>colors</code> and <code>space</code> are available from the package root.</li>
          <li>The verified dependency tree no longer relies on an implicit <code>next</code> installation coming from the core package.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Next.js App Router setup</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">next.config.ts</span>
              <span className="docs-code-note">Validated config</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;`}</code>
            </pre>
          </div>

          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">tsx</span>
              <span className="docs-code-note">Client island import pattern</span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`'use client';

import { Badge, Button, Card, Surface } from '@feitoza-ui/core';`}</code>
            </pre>
          </div>
        </div>
        <ul className="bullet-list">
          <li>A styled-components registry is required for SSR of styles in the validated App Router setup.</li>
          <li>The page shell can stay a Server Component, but the FeitozaUI preview should live in a small Client Component boundary.</li>
          <li>The package root import worked inside the client island during verification.</li>
          <li>The server page itself should not import the library directly in the current validated setup.</li>
          <li>The app already owns its own <code>next</code> dependency; it is not expected to receive Next transitively from FeitozaUI.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Internal tarball verification</h2>
        <p>
          Until the package is published, FeitozaUI is validated internally through real tarball
          installs in <code>consumer-tests/react-vite</code> and
          <code> consumer-tests/next-app-router</code>. That tarball flow is a development
          verification path, not the intended end-user installation experience.
        </p>
      </section>

      <section className="page-section">
        <h2>Current limitations</h2>
        <ul className="bullet-list">
          <li>The package is not yet published, so npm registry availability is still unverified.</li>
          <li>Next.js validation currently proves the library inside client islands, not direct imports from App Router Server Components.</li>
          <li>Support for React Router, Remix, and Astro with React remains theoretical until separately validated.</li>
          <li>Nuxt, Vue, Angular, and Svelte are not supported directly because the component package is React-specific.</li>
        </ul>
      </section>
    </DocsScaffold>
  );
}
