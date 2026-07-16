import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { prepareDocsPage, stabilizeDocsPage } from '../utils/docsTestHelpers';

const routes = [
  '/',
  '/docs/getting-started',
  '/components/button',
  '/foundations'
];

test.describe('documentation accessibility baseline', () => {
  for (const route of routes) {
    test(`checks ${route}`, async ({ page }) => {
      await prepareDocsPage(page, 'dark');
      await stabilizeDocsPage(page, route, 'dark');

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
      const seriousOrCritical = results.violations.filter(
        (violation) =>
          violation.impact === 'serious' || violation.impact === 'critical'
      );

      expect(
        seriousOrCritical,
        JSON.stringify(
          seriousOrCritical.map((violation) => ({
            id: violation.id,
            impact: violation.impact,
            nodes: violation.nodes.map((node) => node.target)
          })),
          null,
          2
        )
      ).toEqual([]);

      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page).toHaveTitle(/FeitozaUI/);

      if (route === '/') {
        await expect(page.locator('aside[aria-label="Documentation navigation"]')).toHaveCount(0);
      } else {
        await expect(
          page.locator('aside[aria-label="Documentation navigation"]')
        ).toHaveCount(1);
      }

      const unnamedInteractive = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a, button'))
          .filter(
            (element) => !(element instanceof HTMLElement) || !element.hidden
          )
          .map((element) => {
            const text =
              element.getAttribute('aria-label')?.trim() ||
              element.getAttribute('title')?.trim() ||
              element.textContent?.trim() ||
              '';

            return {
              tag: element.tagName.toLowerCase(),
              href: element.getAttribute('href'),
              text
            };
          })
          .filter((item) => !item.text && !item.href)
      );

      expect(unnamedInteractive).toEqual([]);
    });
  }
});
