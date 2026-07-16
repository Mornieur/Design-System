import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import type {AppLocale} from '@/i18n/routing';

const localizedPage = {
  en: {
    metadata: {
      title: 'Architecture',
      description:
        'Understand how FeitozaUI documentation, Storybook, and the public package work together.'
    },
    breadcrumb: 'Architecture',
    header: {
      eyebrow: 'Architecture',
      title: 'How the documentation is organized',
      description:
        'This site explains how to adopt FeitozaUI, while Storybook remains the deeper environment for inspecting states and interaction behavior.'
    },
    summaryTitle: 'How the product surface is divided',
    summary: [
      ['Package', 'The published package is the implementation contract for consumers.'],
      ['Documentation', 'This site guides adoption, scanning, and decision-making.'],
      ['Storybook', 'Storybook stays focused on state coverage and interaction depth.'],
      ['Foundations', 'Foundation pages explain the visual rules behind the current component set.']
    ],
    flowTitle: 'How to use these resources together',
    flow: [
      'Use this site to understand installation, foundations, API shape, and accessibility expectations.',
      'Use Storybook when you want to inspect component states and interactions more deeply.',
      'Use the package itself as the source for implementation in your application.'
    ],
    migrationTitle: 'Migration',
    migration:
      'A dedicated migration guide does not exist yet. Until the public surface grows, treat each component page as the source for current usage guidance and API shape.'
  },
  'pt-BR': {
    metadata: {
      title: 'Arquitetura',
      description:
        'Entenda como a documentação FeitozaUI, o Storybook e o pacote público trabalham juntos.'
    },
    breadcrumb: 'Arquitetura',
    header: {
      eyebrow: 'Arquitetura',
      title: 'Como a documentação está organizada',
      description:
        'Este site explica como adotar FeitozaUI, enquanto o Storybook continua sendo o ambiente mais profundo para inspecionar estados e interações.'
    },
    summaryTitle: 'Como a superfície do produto se divide',
    summary: [
      ['Pacote', 'O pacote publicado é o contrato de implementação para quem consome.'],
      ['Documentação', 'Este site orienta adoção, escaneabilidade e tomada de decisão.'],
      ['Storybook', 'Storybook continua focado em cobertura de estados e profundidade de interação.'],
      ['Fundamentos', 'As páginas de fundamentos explicam as regras visuais por trás do conjunto atual de componentes.']
    ],
    flowTitle: 'Como usar esses recursos em conjunto',
    flow: [
      'Use este site para entender instalação, fundamentos, formato da API e expectativas de acessibilidade.',
      'Use Storybook quando quiser inspecionar estados e interações com mais profundidade.',
      'Use o pacote em si como fonte para implementação dentro da sua aplicação.'
    ],
    migrationTitle: 'Migração',
    migration:
      'Ainda não existe um guia dedicado de migração. Enquanto a superfície pública permanece compacta, trate cada página de componente como a referência de uso e API atual.'
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function ArchitecturePage() {
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
        <h2>{content.summaryTitle}</h2>
        <div className="key-value-grid">
          {content.summary.map(([label, value]) => (
            <article key={label}>
              <strong>{label}</strong>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>{content.flowTitle}</h2>
        <ul className="bullet-list">
          {content.flow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="migration" className="page-section">
        <h2>{content.migrationTitle}</h2>
        <p>{content.migration}</p>
      </section>
    </DocsScaffold>
  );
}
