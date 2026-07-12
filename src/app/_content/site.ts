export const siteMetadata = {
  title: 'FeitozaUI Documentation Website',
  shortTitle: 'FeitozaUI',
  tagline: 'Quiet infrastructure for a growing React UI platform.',
  description:
    'A static-first documentation surface for FeitozaUI foundations, package boundaries, installation guidance, architecture notes, and the evolving public component system.'
} as const;

export const homeHighlights = [
  { label: 'Render mode', value: 'Static route model' },
  { label: 'Content source', value: 'Typed local registries' },
  { label: 'System role', value: 'Storybook stays primary' },
  { label: 'Package impact', value: 'Public API unchanged' }
] as const;

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
