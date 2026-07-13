import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import ComponentsCatalog from '@/app/_components/ComponentsCatalog';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import { componentEntries } from '@/app/_content/components';

export const metadata: Metadata = {
  title: 'Components'
};

export default function ComponentsPage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Components' }]} />
        <PageHeader
          eyebrow="System"
          title="Component documentation index"
          description="The first engine pass documents Button, Surface, and Card with real examples, real API notes, and links back to Storybook for deeper behavioral coverage."
          meta={['Public surface only', `${componentEntries.length} initial entries`]}
        />
      </div>

      <section className="page-section">
        <ComponentsCatalog entries={componentEntries} />
      </section>
    </DocsScaffold>
  );
}
