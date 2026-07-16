import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import ComponentsCatalog from '@/app/_components/ComponentsCatalog';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import {getComponentEntries} from '@/app/_content/components';
import type {AppLocale} from '@/i18n/routing';

const localizedPage = {
  en: {
    metadata: {
      title: 'Components',
      description:
        'Browse the currently documented FeitozaUI components and open detailed usage guidance for each one.'
    },
    breadcrumb: 'Components',
    header: {
      eyebrow: 'Components',
      title: 'Browse components',
      description:
        'A compact catalog of the components currently documented in FeitozaUI, with each page focused on usage, examples, API details, and accessibility guidance.'
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Componentes',
      description:
        'Explore os componentes documentados do FeitozaUI e abra orientações detalhadas de uso para cada um.'
    },
    breadcrumb: 'Componentes',
    header: {
      eyebrow: 'Componentes',
      title: 'Explore os componentes',
      description:
        'Um catálogo compacto dos componentes documentados hoje no FeitozaUI, com cada página focada em uso, exemplos, API e acessibilidade.'
    }
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function ComponentsPage() {
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

      <ComponentsCatalog entries={getComponentEntries(locale)} />
    </DocsScaffold>
  );
}
