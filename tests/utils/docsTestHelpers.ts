import type { Page } from '@playwright/test';

export function getTheme(projectName: string) {
  return projectName.includes('light') ? 'light' : 'dark';
}

export async function prepareDocsPage(page: Page, theme: 'dark' | 'light') {
  await page.addInitScript((value) => {
    localStorage.setItem('feitozaui-docs-theme', value);
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = value;
  }, theme);
}

export async function stabilizeDocsPage(
  page: Page,
  route: string,
  theme: 'dark' | 'light'
) {
  await page.goto(route, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('load');
  await page.emulateMedia({ colorScheme: theme, reducedMotion: 'reduce' });
  await page.evaluate((value) => {
    localStorage.setItem('feitozaui-docs-theme', value);
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = value;
  }, theme);
  await page.addStyleTag({
    content: `
      nextjs-portal,
      [data-next-badge-root],
      [data-next-mark],
      [data-nextjs-toast],
      [data-nextjs-dialog],
      #__next-build-watcher {
        display: none !important;
      }

      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    `
  });
  await page.evaluate(async () => {
    if ('fonts' in document) {
      await document.fonts.ready;
    }
  });
  await page.waitForTimeout(150);
}
