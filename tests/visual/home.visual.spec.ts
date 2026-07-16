import { expect, test } from '@playwright/test';
import {
  getTheme,
  prepareDocsPage,
  stabilizeDocsPage
} from '../utils/docsTestHelpers';

test('captures the current home baselines', async ({ page }, testInfo) => {
  const theme = getTheme(testInfo.project.name);

  await prepareDocsPage(page, theme);
  await stabilizeDocsPage(page, '/', theme);
  await page.evaluate(() => window.scrollTo(0, 0));

  const screenshotName = {
    'desktop-dark': 'current-home-dark-desktop.png',
    'desktop-light': 'current-home-light-desktop.png',
    'mobile-dark': 'current-home-dark-mobile.png',
    'mobile-light': 'current-home-light-mobile.png'
  }[testInfo.project.name];

  if (!screenshotName) {
    throw new Error(`Unexpected Playwright project: ${testInfo.project.name}`);
  }

  await expect(page).toHaveScreenshot(screenshotName, {
    animations: 'disabled',
    caret: 'hide',
    fullPage: true,
    maxDiffPixels: 400
  });
});
