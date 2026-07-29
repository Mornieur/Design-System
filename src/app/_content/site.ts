import type {AppLocale} from '@/i18n/routing';

const localizedSiteContent = {
  en: {
    metadata: {
      title: 'FeitozaUI Documentation',
      shortTitle: 'FeitozaUI',
      tagline: 'React components and design guidance for practical product interfaces.',
      description:
        'Accessible React and TypeScript design system with tested components, documented APIs, Storybook, and verified Vite/Next.js distribution.'
    },
    homeHighlights: [
      { label: 'Built for', value: 'React applications' },
      { label: 'Current focus', value: 'Foundations and essential primitives' },
      { label: 'Documentation', value: 'Examples, API, accessibility, guidance' }
    ]
  },
  'pt-BR': {
    metadata: {
      title: 'Documentação FeitozaUI',
      shortTitle: 'FeitozaUI',
      tagline: 'Componentes React e orientação de design para interfaces de produto.',
      description:
        'FeitozaUI é uma biblioteca de componentes React focada em APIs claras, fundamentos visuais e orientação acessível de implementação.'
    },
    homeHighlights: [
      { label: 'Feito para', value: 'Aplicações React' },
      { label: 'Foco atual', value: 'Fundamentos e primitivos essenciais' },
      { label: 'Documentação', value: 'Exemplos, API, acessibilidade e guias' }
    ]
  }
} as const satisfies Record<
  AppLocale,
  {
    metadata: {
      title: string;
      shortTitle: string;
      tagline: string;
      description: string;
    };
    homeHighlights: readonly {label: string; value: string}[];
  }
>;

export function getSiteMetadata(locale: AppLocale) {
  return localizedSiteContent[locale].metadata;
}

export function getHomeHighlights(locale: AppLocale) {
  return localizedSiteContent[locale].homeHighlights;
}

export const themeScript = `
(() => {
  const storageKey = 'feitozaui-docs-theme';
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : (prefersDark ? 'dark' : 'light');

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
`.trim();
