import type { Metadata } from 'next';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';

export const metadata: Metadata = {
  title: 'Accessibility'
};

const accessibilityRules = [
  'Semantic landmarks are added intentionally through header, main, nav, aside, and footer.',
  'Theme colors preserve a high-contrast technical reading environment in both dark and light modes.',
  'Reduced-motion users receive a no-animation shell by default.',
  'The docs app avoids using color alone to communicate route or state meaning.'
];

export default function AccessibilityPage() {
  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Accessibility' }]} />
        <PageHeader
          eyebrow="System"
          title="Accessibility rules carried into the documentation shell"
          description="The site shell follows the same accessibility baseline expected from the component library: semantic HTML first, visible focus, strong contrast, and restrained motion."
          meta={['WCAG AA baseline', 'Reduced motion respected']}
        />
      </div>

      <section className="page-section">
        <h2>Applied rules</h2>
        <ul className="bullet-list">
          {accessibilityRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </DocsScaffold>
  );
}
