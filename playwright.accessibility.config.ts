import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /accessibility\/.*\.spec\.ts/,
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
    launchOptions: {
      executablePath:
        'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
    },
    locale: 'en-US',
    trace: 'off',
    video: 'off',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'desktop-dark',
      use: {
        viewport: { width: 1440, height: 1000 },
        colorScheme: 'dark'
      }
    }
  ]
});
