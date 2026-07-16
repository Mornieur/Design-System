import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import DocsScaffold from '@/app/_components/DocsScaffold';
import PageHeader from '@/app/_components/PageHeader';
import type {AppLocale} from '@/i18n/routing';

const localizedPage = {
  en: {
    metadata: {
      title: 'Accessibility',
      description:
        'Review the accessibility expectations that accompany FeitozaUI documentation and component guidance.'
    },
    breadcrumb: 'Accessibility',
    header: {
      eyebrow: 'Accessibility',
      title: 'Accessibility expectations',
      description:
        'The documentation follows the same baseline expected from the component library: semantic structure, visible focus, readable contrast, and reduced-motion support.'
    },
    principles: {
      title: 'What the docs guarantee',
      items: [
        'Semantic landmarks and heading order support screen reader navigation.',
        'Theme colors preserve contrast in both dark and light modes.',
        'Reduced-motion users receive a quieter interface by default.',
        'The interface avoids relying on color alone to communicate state or hierarchy.'
      ]
    },
    review: {
      title: 'What to validate in your product',
      items: [
        'Keep labels, headings, and action text specific to the task.',
        'Test keyboard flow for every interactive example you adapt.',
        'Verify focus visibility and contrast in the contexts where your product uses the components.'
      ]
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Acessibilidade',
      description:
        'Revise as expectativas de acessibilidade que acompanham a documentação e a orientação de uso do FeitozaUI.'
    },
    breadcrumb: 'Acessibilidade',
    header: {
      eyebrow: 'Acessibilidade',
      title: 'Expectativas de acessibilidade',
      description:
        'A documentação segue a mesma base esperada da biblioteca: estrutura semântica, foco visível, contraste legível e suporte a reduced motion.'
    },
    principles: {
      title: 'O que a documentação garante',
      items: [
        'Landmarks semânticos e ordem de headings ajudam a navegação por leitor de tela.',
        'As cores preservam contraste tanto no tema escuro quanto no claro.',
        'Pessoas com reduced motion recebem uma interface mais silenciosa por padrão.',
        'A interface evita depender apenas de cor para comunicar estado ou hierarquia.'
      ]
    },
    review: {
      title: 'O que validar no seu produto',
      items: [
        'Mantenha labels, títulos e textos de ação específicos para a tarefa.',
        'Teste o fluxo de teclado de cada exemplo interativo que você adaptar.',
        'Verifique foco visível e contraste nos contextos em que o produto usa os componentes.'
      ]
    }
  }
} as const satisfies Record<AppLocale, unknown>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;
  return localizedPage[locale].metadata;
}

export default async function AccessibilityPage() {
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
          <h2>{content.principles.title}</h2>
        </div>
        <div className="docs-guidance-grid">
          {content.principles.items.map((item) => (
            <div key={item} className="docs-guidance-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <h2>{content.review.title}</h2>
        </div>
        <ul className="bullet-list">
          {content.review.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </DocsScaffold>
  );
}
