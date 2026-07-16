import { expect, test } from '@playwright/test';
import { prepareDocsPage, stabilizeDocsPage } from '../utils/docsTestHelpers';

test('captures the current getting started baseline', async ({
  page
}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'desktop-dark',
    'Baseline is only required for desktop dark.'
  );

  await prepareDocsPage(page, 'dark');
  await stabilizeDocsPage(page, '/docs/getting-started', 'dark');
  await page.evaluate(() => window.scrollTo(0, 0));

  await expect(page).toHaveScreenshot(
    'current-getting-started-dark-desktop.png',
    {
      animations: 'disabled',
      caret: 'hide',
      fullPage: true
    }
  );
});
