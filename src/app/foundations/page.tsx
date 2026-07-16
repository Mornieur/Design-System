import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import FoundationsCatalog from '@/app/_components/FoundationsCatalog';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import {
  getFoundationEntries
} from '@/app/_content/foundations';
import type {AppLocale} from '@/i18n/routing';

const localizedPage = {
  en: {
    metadata: {
      title: 'Foundations',
      description:
        'Explore the visual foundations that shape FeitozaUI, including color, typography, spacing, surfaces, and motion.'
    },
    breadcrumb: 'Foundations',
    header: {
      eyebrow: 'Foundations',
      title: 'Design foundations',
      description:
        'Review the visual decisions behind FeitozaUI, from color and typography to spacing, surfaces, and motion.'
    },
    sectionTitle: 'Foundations shape how the components feel in real products.',
    sectionBody:
      'These pages explain the system-level decisions that keep the documentation and the component library feeling coherent.'
  },
  'pt-BR': {
    metadata: {
      title: 'Fundamentos',
      description:
        'Explore os fundamentos visuais que moldam o FeitozaUI, incluindo cor, tipografia, espaçamento, superfícies e movimento.'
    },
    breadcrumb: 'Fundamentos',
    header: {
      eyebrow: 'Fundamentos',
      title: 'Fundamentos de design',
      description:
        'Revise as decisões visuais por trás do FeitozaUI, de cor e tipografia até espaçamento, superfícies e movimento.'
    },
    sectionTitle: 'Os fundamentos moldam a sensação dos componentes em produtos reais.',
    sectionBody:
      'Estas páginas explicam as decisões de sistema que mantêm a documentação e a biblioteca de componentes coerentes entre si.'
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function FoundationsPage() {
  const locale = (await getLocale()) as AppLocale;
  const content = localizedPage[locale];

  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs items={[{label: 'Home', href: '/'}, {label: content.breadcrumb}]} />
        <PageHeader
          eyebrow={content.header.eyebrow}
          title={content.header.title}
          description={content.header.description}
        />
      </div>

      <section className="page-section page-section-density-tight">
        <div className="section-heading">
          <h2>{content.sectionTitle}</h2>
          <p>{content.sectionBody}</p>
        </div>
        <FoundationsCatalog entries={getFoundationEntries(locale)} />
      </section>
    </DocsScaffold>
  );
}
