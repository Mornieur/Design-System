import { expect, test } from '@playwright/test';
import {
  getTheme,
  prepareDocsPage,
  stabilizeDocsPage
} from '../utils/docsTestHelpers';

test('keeps navigation reachable on docs routes', async ({
  page
}, testInfo) => {
  const theme = getTheme(testInfo.project.name);

  await prepareDocsPage(page, theme);
  await stabilizeDocsPage(page, '/docs/installation', theme);

  if (testInfo.project.name.startsWith('mobile')) {
    await expect(page.locator('.docs-sidebar-desktop')).toBeHidden();
    await expect(page.locator('.docs-sidebar-mobile')).toBeVisible();
    await expect(page.getByText('Browse docs')).toBeVisible();
    await page.locator('.docs-sidebar-mobile summary').click();
    await expect(page.locator('.docs-sidebar-mobile-panel')).toBeVisible();
    await expect(
      page.locator('.docs-sidebar-mobile-panel').getByRole('link', {
        name: 'Introduction'
      })
    ).toBeVisible();
    await page.locator('.mobile-nav-summary').click();
    await expect(page.locator('.mobile-nav-panel')).toBeVisible();
    await expect(
      page
        .locator('.mobile-nav-panel')
        .getByRole('link', { name: 'Components' })
    ).toBeVisible();
  } else {
    await expect(page.locator('.docs-sidebar-desktop')).toBeVisible();
    await expect(
      page.locator('.docs-sidebar-desktop').getByRole('link', {
        name: 'Introduction'
      })
    ).toBeVisible();
    await expect(
      page.getByRole('navigation', { name: 'Primary' })
    ).toBeVisible();
  }
});

test('renders a stable not found route', async ({ page }, testInfo) => {
  const theme = getTheme(testInfo.project.name);

  await prepareDocsPage(page, theme);
  await stabilizeDocsPage(page, '/route-that-does-not-exist', theme);

  await expect(
    page.getByRole('heading', { name: "We couldn't find that page." })
  ).toBeVisible();
});
