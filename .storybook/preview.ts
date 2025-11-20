import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import customTheme from './theme';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'dark'
    })
  ],

  parameters: {
    layout: 'centered',

    controls: {
      expanded: true
    },

    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1A1A1A' }
      ]
    },

    darkMode: {
      current: 'dark',
      dark: customTheme,
      light: {
        ...customTheme,
        base: 'light',
        appBg: '#FFFFFF',
        textColor: '#000000'
      }
    },

    viewMode: 'docs',
    previewTabs: {
      'storybook/docs/panel': { index: -1 }
    }
  }
};

export default preview;
