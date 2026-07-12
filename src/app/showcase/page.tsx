import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';

export const metadata: Metadata = {
  title: 'Showcase'
};

export default function ShowcasePage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Showcase' }]} />
        <PageHeader
          eyebrow="System"
          title="Showcase is reserved for future compositions"
          description="This route exists so the site architecture can grow into realistic compositions later, without turning phase one into a marketing site or a Storybook clone."
          meta={['Placeholder route', 'Future compositions only']}
        />
      </div>

      <section className="page-section">
        <h2>Planned direction</h2>
        <ul className="bullet-list">
          <li>Realistic product compositions built from public components.</li>
          <li>No custom one-off APIs promoted from showcase code into the package.</li>
          <li>A clear separation between exploratory UI and reusable library contracts.</li>
        </ul>
      </section>
    </DocsScaffold>
  );
}
