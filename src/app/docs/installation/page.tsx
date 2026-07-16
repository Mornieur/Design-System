import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import type {AppLocale} from '@/i18n/routing';

const peerDependencies = [
  'react ^18 || ^19',
  'react-dom ^18 || ^19',
  'styled-components ^6.1.19'
];

const localizedPage = {
  en: {
    metadata: {
      title: 'Installation',
      description:
        'Set up FeitozaUI in a React app, understand peer dependencies, and review stack-specific setup notes.'
    },
    breadcrumb: 'Installation',
    header: {
      eyebrow: 'Installation',
      title: 'Install FeitozaUI',
      description:
        'Add the package to a React application, satisfy the peer dependency, and follow the setup notes that apply to your stack.'
    },
    packageTarget: 'Package target',
    peerTitle: 'Peer dependency expectations',
    peerBody:
      'FeitozaUI ships as a React package. Your application keeps ownership of its own framework dependencies and configuration.',
    viteTitle: 'React + Vite setup',
    viteNotes: [
      'No global package stylesheet import is required for the current component surface.',
      'If you want the same typography as the docs, load the corresponding fonts in your application.',
      'Public tokens such as colors and space are available from the package root.',
      'Use Storybook alongside these docs when you want to inspect additional interaction states.'
    ],
    nextTitle: 'Next.js App Router setup',
    nextNotes: [
      'Enable a styled-components registry so server-rendered pages can emit styles correctly.',
      'Interactive FeitozaUI usage should live in client components when your page depends on browser events.',
      'Keep the package imported from the app layer that actually renders the interface.',
      'Let your Next.js app continue owning its own Next.js dependency and configuration.'
    ],
    beforeShipping: {
      title: 'Before shipping to production',
      items: [
        'Confirm that your app already provides React, React DOM, and styled-components in supported versions.',
        'Verify color contrast and focus visibility in the contexts where your app uses the components.',
        'Open the component pages for API details, accessibility notes, and example usage.'
      ]
    },
    limitations: {
      title: 'Adoption notes',
      body:
        'The package surface is still intentionally compact. If your product needs a broader catalog, validate the current primitives first before planning larger adoption.'
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Instalacao',
      description:
        'Configure o FeitozaUI em uma aplicacao React, entenda as dependencias peer e revise as notas de setup do seu stack.'
    },
    breadcrumb: 'Instalacao',
    header: {
      eyebrow: 'Instalacao',
      title: 'Instale FeitozaUI',
      description:
        'Adicione o pacote a uma aplicacao React, atenda a dependencia peer e siga as notas de setup que fazem sentido para o seu stack.'
    },
    packageTarget: 'Pacote',
    peerTitle: 'Expectativas de dependencias peer',
    peerBody:
      'FeitozaUI e distribuido como pacote React. A aplicacao continua sendo dona das dependencias de framework e da propria configuracao.',
    viteTitle: 'Setup com React + Vite',
    viteNotes: [
      'A superficie atual de componentes nao exige import global de stylesheet do pacote.',
      'Se voce quiser a mesma tipografia da documentacao, carregue as fontes correspondentes na sua aplicacao.',
      'Tokens publicos como colors e space estao disponiveis na raiz do pacote.',
      'Use Storybook junto com esta documentacao quando quiser inspecionar mais estados de interacao.'
    ],
    nextTitle: 'Setup com Next.js App Router',
    nextNotes: [
      'Ative um registry de styled-components para que paginas renderizadas no servidor emitam estilos corretamente.',
      'Uso interativo do FeitozaUI deve viver em client components quando a pagina depender de eventos do navegador.',
      'Importe o pacote na camada da aplicacao que realmente renderiza a interface.',
      'Deixe o seu app Next.js continuar dono da propria dependencia e configuracao de Next.'
    ],
    beforeShipping: {
      title: 'Antes de colocar em producao',
      items: [
        'Confirme que o app ja fornece React, React DOM e styled-components em versoes compativeis.',
        'Verifique contraste de cor e foco visivel nos contextos em que os componentes serao usados.',
        'Abra as paginas dos componentes para ver detalhes de API, notas de acessibilidade e exemplos.'
      ]
    },
    limitations: {
      title: 'Notas para adocao',
      body:
        'A superficie do pacote continua intencionalmente compacta. Se o produto precisar de um catalogo maior, valide primeiro os primitivos atuais antes de ampliar a adocao.'
    }
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function InstallationPage() {
  const locale = (await getLocale()) as AppLocale;
  const content = localizedPage[locale];

  return (
    <DocsScaffold>
      <div className="docs-panel">
        <Breadcrumbs
          items={[{label: 'Home', href: '/'}, {label: content.breadcrumb}]}
        />
        <PageHeader
          eyebrow={content.header.eyebrow}
          title={content.header.title}
          description={content.header.description}
        />
      </div>

      <section className="page-section">
        <h2>{content.packageTarget}</h2>
        <div className="note-box">
          <code>@feitoza-ui/core</code>
        </div>
      </section>

      <section className="page-section">
        <h2>{content.peerTitle}</h2>
        <ul className="bullet-list">
          {peerDependencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{content.peerBody}</p>
      </section>

      <section className="page-section">
        <h2>{content.viteTitle}</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">npm</span>
              <span className="docs-code-note">
                {locale === 'en'
                  ? 'Install package and peer dependency'
                  : 'Instale o pacote e a dependencia peer'}
              </span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`npm install @feitoza-ui/core styled-components`}</code>
            </pre>
          </div>

          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">tsx</span>
              <span className="docs-code-note">
                {locale === 'en' ? 'Typical import pattern' : 'Padrao comum de import'}
              </span>
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
          {content.viteNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>{content.nextTitle}</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">next.config.ts</span>
              <span className="docs-code-note">
                {locale === 'en'
                  ? 'Enable styled-components compiler support'
                  : 'Ative o suporte do compilador a styled-components'}
              </span>
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
              <span className="docs-code-note">
                {locale === 'en'
                  ? 'Import components inside interactive UI'
                  : 'Importe os componentes dentro da UI interativa'}
              </span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`'use client';

import { Badge, Button, Card, Surface } from '@feitoza-ui/core';`}</code>
            </pre>
          </div>
        </div>
        <ul className="bullet-list">
          {content.nextNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>{content.beforeShipping.title}</h2>
        <ul className="bullet-list">
          {content.beforeShipping.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>{content.limitations.title}</h2>
        <p>{content.limitations.body}</p>
      </section>
    </DocsScaffold>
  );
}
