import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

const localizedPage = {
  en: {
    metadata: {
      title: 'Getting Started',
      description:
        'Learn what FeitozaUI provides today, who it is for, and how to start evaluating the package in your app.'
    },
    breadcrumb: 'Getting Started',
    header: {
      eyebrow: 'Getting Started',
      title: 'Start using FeitozaUI',
      description:
        'FeitozaUI focuses on a compact set of foundational React components, with documentation centered on installation, usage, API clarity, and accessibility.'
    },
    sections: {
      expect: {
        title: 'What to expect today',
        items: [
          'The package name is @feitoza-ui/core.',
          'The library is designed for React applications and integrates cleanly with common React stacks.',
          'The current docs cover installation, component usage, foundations, and accessibility expectations.',
          'Storybook remains the best place to inspect broader interaction states when you need deeper behavior coverage.'
        ]
      },
      quickStart: {
        title: 'Quick start',
        installNote: 'Install package and peer dependency',
        renderNote: 'Render a first component'
      },
      setups: {
        title: 'Recommended application setups',
        items: [
          {
            title: 'React + Vite',
            body: 'A straightforward fit when you want lightweight app scaffolding around the component library.'
          },
          {
            title: 'Next.js App Router',
            body: 'A good option when your application already uses Next.js and you want to layer FeitozaUI into product-facing UI.'
          }
        ]
      },
      next: {
        title: 'Where to go next',
        items: [
          'Open Installation for setup guidance and package requirements.',
          'Browse Components for examples, API details, and accessibility expectations.',
          'Review Foundations to understand the visual language behind the library.'
        ]
      },
      fit: {
        title: 'Adoption fit',
        good: ['React + Vite', 'Next.js App Router'],
        evaluate: ['React Router', 'Remix', 'Astro with React'],
        cautionTitle: 'Requires React',
        caution:
          'FeitozaUI ships React components. Non-React environments require a separate integration approach.'
      }
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Comece aqui',
      description:
        'Entenda o que o FeitozaUI oferece hoje, para quem ele faz sentido e como comecar a avalia-lo no seu produto.'
    },
    breadcrumb: 'Comece aqui',
    header: {
      eyebrow: 'Comece aqui',
      title: 'Comece a usar FeitozaUI',
      description:
        'FeitozaUI foca em um conjunto compacto de componentes React fundamentais, com documentacao centrada em instalacao, uso, clareza de API e acessibilidade.'
    },
    sections: {
      expect: {
        title: 'O que esperar hoje',
        items: [
          'O nome do pacote e @feitoza-ui/core.',
          'A biblioteca foi pensada para aplicacoes React e se integra bem aos stacks React mais comuns.',
          'A documentacao atual cobre instalacao, uso de componentes, fundamentos e expectativas de acessibilidade.',
          'Storybook continua sendo o melhor lugar para inspecionar estados e interacoes com mais profundidade.'
        ]
      },
      quickStart: {
        title: 'Primeiros passos',
        installNote: 'Instale o pacote e a dependencia peer',
        renderNote: 'Renderize o primeiro componente'
      },
      setups: {
        title: 'Ambientes mais indicados',
        items: [
          {
            title: 'React + Vite',
            body: 'Uma combinacao direta quando voce quer um shell leve ao redor da biblioteca de componentes.'
          },
          {
            title: 'Next.js App Router',
            body: 'Uma boa opcao quando a aplicacao ja usa Next.js e voce quer inserir FeitozaUI na interface do produto.'
          }
        ]
      },
      next: {
        title: 'Proximos passos',
        items: [
          'Abra Instalacao para conferir setup e requisitos do pacote.',
          'Explore Componentes para ver exemplos, detalhes de API e expectativas de acessibilidade.',
          'Revise Fundamentos para entender a linguagem visual por tras da biblioteca.'
        ]
      },
      fit: {
        title: 'Onde a adocao faz mais sentido',
        good: ['React + Vite', 'Next.js App Router'],
        evaluate: ['React Router', 'Remix', 'Astro com React'],
        cautionTitle: 'Requer React',
        caution:
          'FeitozaUI entrega componentes React. Ambientes nao React exigem um caminho de integracao separado.'
      }
    }
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function GettingStartedPage() {
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
        <h2>{content.sections.expect.title}</h2>
        <ul className="bullet-list">
          {content.sections.expect.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="quick-start" className="page-section">
        <h2>{content.sections.quickStart.title}</h2>
        <div className="docs-code-stack">
          <div className="docs-code-frame">
            <div className="docs-code-header">
              <span className="docs-code-label">npm</span>
              <span className="docs-code-note">
                {content.sections.quickStart.installNote}
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
                {content.sections.quickStart.renderNote}
              </span>
            </div>
            <pre className="docs-code-block" tabIndex={0}>
              <code>{`import { Button } from '@feitoza-ui/core';

export function Example() {
  return <Button>Continue</Button>;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>{content.sections.setups.title}</h2>
        <ul className="bullet-list">
          {content.sections.setups.items.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <h2>{content.sections.next.title}</h2>
        <ul className="bullet-list">
          <li>
            <Link href="/docs/installation">
              {content.sections.next.items[0]}
            </Link>
          </li>
          <li>
            <Link href="/components">{content.sections.next.items[1]}</Link>
          </li>
          <li>
            <Link href="/foundations">{content.sections.next.items[2]}</Link>
          </li>
        </ul>
      </section>

      <section className="page-section">
        <h2>{content.sections.fit.title}</h2>
        <div className="docs-guidance-grid">
          <div className="docs-guidance-card">
            <h3>{locale === 'en' ? 'Best fit' : 'Melhor encaixe'}</h3>
            <ul className="bullet-list">
              {content.sections.fit.good.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="docs-guidance-card">
            <h3>{locale === 'en' ? 'Evaluate case by case' : 'Avalie caso a caso'}</h3>
            <ul className="bullet-list">
              {content.sections.fit.evaluate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="docs-guidance-card">
          <h3>{content.sections.fit.cautionTitle}</h3>
          <p>{content.sections.fit.caution}</p>
        </div>
      </section>
    </DocsScaffold>
  );
}
