import type {AppLocale} from '@/i18n/routing';

export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

const localizedNavigation = {
  en: {
    main: [
      { label: 'Foundations', href: '/foundations' },
      { label: 'Components', href: '/components' },
      { label: 'Guides', href: '/docs/getting-started' },
      { label: 'Accessibility', href: '/accessibility' }
    ],
    docs: [
      {
        title: 'Getting Started',
        items: [
          { label: 'Introduction', href: '/docs/getting-started' },
          { label: 'Installation', href: '/docs/installation' },
          { label: 'Quick Start', href: '/docs/getting-started#quick-start' }
        ]
      },
      {
        title: 'Foundations',
        items: [
          { label: 'Foundations', href: '/foundations' },
          { label: 'Colors', href: '/foundations/colors' },
          { label: 'Typography', href: '/foundations/typography' },
          { label: 'Spacing', href: '/foundations/spacing' },
          { label: 'Surface System', href: '/foundations/surface-system' },
          { label: 'Motion', href: '/foundations/motion' }
        ]
      },
      {
        title: 'Components',
        items: [
          { label: 'Overview', href: '/components' },
          { label: 'Button', href: '/components/button' },
          { label: 'Checkbox', href: '/components/checkbox' },
          { label: 'Surface', href: '/components/surface' },
          { label: 'Card', href: '/components/card' }
        ]
      },
      {
        title: 'Patterns',
        items: [{ label: 'Examples', href: '/showcase' }]
      },
      {
        title: 'Resources',
        items: [
          { label: 'Accessibility', href: '/accessibility' },
          { label: 'Architecture', href: '/architecture' },
          { label: 'Migration', href: '/architecture#migration' }
        ]
      }
    ],
    footer: [
      { label: 'Foundations', href: '/foundations' },
      { label: 'Components', href: '/components' },
      { label: 'Guides', href: '/docs/getting-started' }
    ]
  },
  'pt-BR': {
    main: [
      { label: 'Fundamentos', href: '/foundations' },
      { label: 'Componentes', href: '/components' },
      { label: 'Guias', href: '/docs/getting-started' },
      { label: 'Acessibilidade', href: '/accessibility' }
    ],
    docs: [
      {
        title: 'Comece aqui',
        items: [
          { label: 'Introdução', href: '/docs/getting-started' },
          { label: 'Instalação', href: '/docs/installation' },
          { label: 'Primeiros passos', href: '/docs/getting-started#quick-start' }
        ]
      },
      {
        title: 'Fundamentos',
        items: [
          { label: 'Visão geral', href: '/foundations' },
          { label: 'Cores', href: '/foundations/colors' },
          { label: 'Tipografia', href: '/foundations/typography' },
          { label: 'Espaçamento', href: '/foundations/spacing' },
          { label: 'Superfícies', href: '/foundations/surface-system' },
          { label: 'Movimento', href: '/foundations/motion' }
        ]
      },
      {
        title: 'Componentes',
        items: [
          { label: 'Visão geral', href: '/components' },
          { label: 'Button', href: '/components/button' },
          { label: 'Checkbox', href: '/components/checkbox' },
          { label: 'Surface', href: '/components/surface' },
          { label: 'Card', href: '/components/card' }
        ]
      },
      {
        title: 'Padrões',
        items: [{ label: 'Exemplos', href: '/showcase' }]
      },
      {
        title: 'Recursos',
        items: [
          { label: 'Acessibilidade', href: '/accessibility' },
          { label: 'Arquitetura', href: '/architecture' },
          { label: 'Migração', href: '/architecture#migration' }
        ]
      }
    ],
    footer: [
      { label: 'Fundamentos', href: '/foundations' },
      { label: 'Componentes', href: '/components' },
      { label: 'Guias', href: '/docs/getting-started' }
    ]
  }
} satisfies Record<AppLocale, {
  main: NavItem[];
  docs: NavGroup[];
  footer: NavItem[];
}>;

export function getMainNavigation(locale: AppLocale) {
  return localizedNavigation[locale].main;
}

export function getDocsNavigation(locale: AppLocale) {
  return localizedNavigation[locale].docs;
}

export function getFooterNavigation(locale: AppLocale) {
  return localizedNavigation[locale].footer;
}
