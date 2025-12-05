import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    '@storybook/addon-vitest'
  ],

  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },

  staticDirs: ['../public'],

  core: { disableTelemetry: true },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;
