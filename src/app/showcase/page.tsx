import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import type {AppLocale} from '@/i18n/routing';

const localizedPage = {
  en: {
    metadata: {
      title: 'Showcase',
      description:
        'Preview how FeitozaUI components can be combined into realistic product-facing compositions.'
    },
    breadcrumb: 'Showcase',
    header: {
      eyebrow: 'Patterns',
      title: 'Examples and patterns',
      description:
        'These examples show how the current public primitives can support real product structure without inventing a second design system inside the docs.'
    },
    sections: {
      focus: {
        title: 'What this area is for',
        items: [
          'Show realistic product compositions built from the public component set.',
          'Keep exploratory UI separate from the reusable library contract.',
          'Encourage navigation from foundations to components to real usage patterns.'
        ]
      },
      tiles: [
        {
          title: 'Operational summary',
          body: 'A compact reading view for status, context, and primary action hierarchy.'
        },
        {
          title: 'Structured detail',
          body: 'Panels, subgroups, and actions that keep containment and rhythm predictable.'
        },
        {
          title: 'Documentation continuity',
          body: 'Examples should bridge concept pages and component pages instead of feeling like isolated mockups.'
        }
      ]
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Showcase',
      description:
        'Veja como os componentes do FeitozaUI podem ser combinados em composições mais próximas de produtos reais.'
    },
    breadcrumb: 'Showcase',
    header: {
      eyebrow: 'Padrões',
      title: 'Exemplos e padrões',
      description:
        'Estes exemplos mostram como os primitivos públicos atuais podem sustentar estruturas de produto sem inventar um segundo design system dentro da documentação.'
    },
    sections: {
      focus: {
        title: 'Para que esta área existe',
        items: [
          'Mostrar composições de produto mais realistas construídas com o conjunto público de componentes.',
          'Manter a UI exploratória separada do contrato reutilizável da biblioteca.',
          'Estimular a navegação de fundamentos para componentes e depois para padrões de uso.'
        ]
      },
      tiles: [
        {
          title: 'Resumo operacional',
          body: 'Uma visão compacta para status, contexto e hierarquia de ação principal.'
        },
        {
          title: 'Detalhe estruturado',
          body: 'Painéis, subgrupos e ações que mantêm contenção e ritmo previsíveis.'
        },
        {
          title: 'Continuidade documental',
          body: 'Os exemplos devem conectar páginas conceituais e páginas de componente, e não parecer mockups soltos.'
        }
      ]
    }
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function ShowcasePage() {
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

      <section className="page-section">
        <div className="section-heading">
          <h2>{content.sections.focus.title}</h2>
        </div>
        <ul className="bullet-list">
          {content.sections.focus.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <div className="card-grid card-grid-three">
          {content.sections.tiles.map((item) => (
            <article key={item.title} className="content-card content-card-compact showcase-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </DocsScaffold>
  );
}
