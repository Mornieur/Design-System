import {getLocale} from 'next-intl/server';
import HomeEditorialPreviews from '@/app/_components/HomeEditorialPreviews';
import HomeHeroPanel from '@/app/_components/HomeHeroPanel';
import {
  getComponentEntries,
  getFeaturedComponents
} from '@/app/_content/components';
import {getFoundationEntries} from '@/app/_content/foundations';
import {getHomeHighlights, getSiteMetadata} from '@/app/_content/site';
import type {AppLocale} from '@/i18n/routing';

const localizedHome = {
  en: {
    heroTitle: 'Build calmer interfaces with',
    supportingCopy:
      'Start with the essentials: installation, foundations, component usage, and accessibility guidance written for teams preparing to ship real product UI.',
    actions: {
      primary: 'Get started',
      secondary: 'Browse components',
      tertiary: 'Explore foundations'
    },
    why: {
      eyebrow: 'Why it exists',
      title:
        'FeitozaUI focuses on the decisions that make component libraries easier to adopt.',
      body:
        'The documentation is intentionally compact. It helps teams understand API shape, visual foundations, and usage expectations without burying the essentials.',
      items: [
        'Small public surface with clear component responsibilities.',
        'Foundations explained as practical guidance, not repository archaeology.',
        'Accessibility guidance kept close to real usage examples.'
      ]
    },
    firstSteps: {
      eyebrow: 'First steps',
      title: 'Move from evaluation to implementation in a few minutes.',
      items: [
        'Read the introduction and installation notes.',
        'Review the visual foundations behind the system.',
        'Open a component page and copy a working example.'
      ],
      links: ['Installation', 'Button example', 'Accessibility']
    },
    previews: {
      guides: {
        eyebrow: 'Start here',
        title: 'Use the documentation like a product guide, not a repository tour.',
        body:
          'The core path is simple: understand the package, install it in a React app, learn the visual language, and open the component you need.',
        cards: [
          ['Learn the basics', 'What FeitozaUI covers today, how to evaluate it, and where to go next.'],
          ['Install the package', 'Peer dependencies, setup notes, and examples for common React stacks.'],
          ['Open a component page', 'See usage guidance, playgrounds, examples, API details, and accessibility notes.']
        ]
      },
      foundations: {
        eyebrow: 'Foundations',
        title: 'Foundations explain the language behind the components.',
        body:
          'Color, typography, spacing, surfaces, and motion should feel like part of one system across every page and preview.'
      },
      components: {
        eyebrow: 'Components',
        title: 'Start with a small set of documented primitives and compositions.',
        body:
          'Each component page is designed to answer the practical questions: when to use it, how it looks in context, what its API is, and what accessibility expectations come with it.'
      }
    }
  },
  'pt-BR': {
    heroTitle: 'Construa interfaces mais calmas com',
    supportingCopy:
      'Comece pelo essencial: instalacao, fundamentos, uso de componentes e acessibilidade escritos para equipes que realmente vao colocar a interface em producao.',
    actions: {
      primary: 'Comecar',
      secondary: 'Ver componentes',
      tertiary: 'Explorar fundamentos'
    },
    why: {
      eyebrow: 'Por que existe',
      title:
        'FeitozaUI foca nas decisoes que tornam uma biblioteca de componentes mais facil de adotar.',
      body:
        'A documentacao e intencionalmente compacta. Ela ajuda equipes a entender formato de API, fundamentos visuais e expectativas de uso sem esconder o essencial no meio do caminho.',
      items: [
        'Superficie publica pequena e com responsabilidades claras.',
        'Fundamentos explicados como orientacao pratica, nao como arqueologia de repositorio.',
        'Acessibilidade posicionada perto de exemplos reais de uso.'
      ]
    },
    firstSteps: {
      eyebrow: 'Primeiros passos',
      title: 'Saia da avaliacao para a implementacao em poucos minutos.',
      items: [
        'Leia a introducao e as notas de instalacao.',
        'Revise os fundamentos visuais por tras do sistema.',
        'Abra uma pagina de componente e copie um exemplo funcional.'
      ],
      links: ['Instalacao', 'Exemplo de Button', 'Acessibilidade']
    },
    previews: {
      guides: {
        eyebrow: 'Comece aqui',
        title: 'Use a documentacao como guia de produto, nao como tour pelo repositorio.',
        body:
          'O caminho principal e simples: entender o pacote, instalar em uma aplicacao React, aprender a linguagem visual e abrir o componente necessario.',
        cards: [
          ['Entenda o basico', 'O que o FeitozaUI cobre hoje, como avalia-lo e para onde seguir depois.'],
          ['Instale o pacote', 'Dependencias peer, notas de setup e exemplos para stacks React comuns.'],
          ['Abra uma pagina de componente', 'Veja orientacao de uso, playgrounds, exemplos, API e notas de acessibilidade.']
        ]
      },
      foundations: {
        eyebrow: 'Fundamentos',
        title: 'Os fundamentos explicam a linguagem por tras dos componentes.',
        body:
          'Cor, tipografia, espacamento, superficies e movimento devem parecer parte do mesmo sistema em cada pagina e preview.'
      },
      components: {
        eyebrow: 'Componentes',
        title: 'Comece por um conjunto pequeno de primitivos e composicoes bem documentados.',
        body:
          'Cada pagina de componente foi desenhada para responder perguntas praticas: quando usar, como fica em contexto, qual e a API e quais expectativas de acessibilidade a acompanham.'
      }
    }
  }
} as const satisfies Record<AppLocale, unknown>;

export default async function Home() {
  const locale = (await getLocale()) as AppLocale;
  const siteMetadata = getSiteMetadata(locale);
  const homeHighlights = getHomeHighlights(locale);
  const content = localizedHome[locale];

  return (
    <main id="main-content" className="site-main">
      <div className="page-shell page-shell-home">
        <HomeHeroPanel
          heroTitle={content.heroTitle}
          description={siteMetadata.description}
          highlights={homeHighlights}
          shortTitle={siteMetadata.shortTitle}
          supportingCopy={content.supportingCopy}
          actions={content.actions}
          why={content.why}
          firstSteps={content.firstSteps}
        />
        <HomeEditorialPreviews
          componentEntries={getComponentEntries(locale)}
          featuredComponents={getFeaturedComponents(locale)}
          foundationEntries={getFoundationEntries(locale)}
          content={content.previews}
        />
      </div>
    </main>
  );
}
