import type { Preview } from '@storybook/react';
import customTheme from './theme';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1A1A1A' }
      ]
    },
    darkMode: {
      current: 'dark',
      dark: customTheme,
      light: {
        ...customTheme,
        base: 'light',
        appBg: '#ffffff',
        textColor: '#000000'
      }
    },
    layout: 'centered',
    viewMode: 'docs',
    previewTabs: {
      'storybook/docs/panel': { index: -1 }
    }
  }
};

export default preview;
