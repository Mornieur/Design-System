import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import FoundationsCatalog from '@/app/_components/FoundationsCatalog';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import { foundationEntries } from '@/app/_content/foundations';

export const metadata: Metadata = {
  title: 'Foundations'
};

export default function FoundationsPage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Foundations' }]} />
        <PageHeader
          eyebrow="System"
          title="Design foundations with a real route model"
          description="The foundations section maps the existing design-system guidance into a typed, navigable documentation structure."
          meta={['Static catalog', `${foundationEntries.length} tracked foundation areas`]}
        />
      </div>

      <section className="page-section">
        <FoundationsCatalog entries={foundationEntries} />
      </section>
    </DocsScaffold>
  );
}
