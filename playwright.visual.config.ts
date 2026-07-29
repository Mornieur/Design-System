import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /visual\/.*\.spec\.ts/,
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  webServer: {
    command: 'yarn build:docs && yarn start:docs -p 3100',
    port: 3100,
    reuseExistingServer: !process.env.CI
  },
  use: {
    baseURL: 'http://127.0.0.1:3100',
    browserName: 'chromium',
    locale: 'en-US',
    trace: 'off',
    video: 'off',
    screenshot: 'only-on-failure'
  },
  expect: {
    toHaveScreenshot: {
      pathTemplate:
        '{testDir}/visual/__screenshots__{/projectName}/{testFilePath}/{arg}{ext}'
    }
  },
  projects: [
    {
      name: 'desktop-dark',
      use: {
        viewport: { width: 1440, height: 1000 },
        colorScheme: 'dark'
      }
    },
    {
      name: 'desktop-light',
      use: {
        viewport: { width: 1440, height: 1000 },
        colorScheme: 'light'
      }
    },
    {
      name: 'mobile-dark',
      use: {
        viewport: { width: 390, height: 844 },
        colorScheme: 'dark'
      }
    },
    {
      name: 'mobile-light',
      use: {
        viewport: { width: 390, height: 844 },
        colorScheme: 'light'
      }
    }
  ]
});
