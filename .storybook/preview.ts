import type { Preview } from '@storybook/nextjs';
import { withThemeByClassName } from '@storybook/addon-themes';
import { semanticColors } from '../src/design-tokens';
import customTheme from './theme';
import './preview.css';

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

    docs: {
      theme: customTheme
    },

    backgrounds: {
      default: 'FeitozaUI Dark',
      values: [
        { name: 'FeitozaUI Dark', value: semanticColors.dark.background },
        { name: 'FeitozaUI Surface', value: semanticColors.dark.surface },
        { name: 'FeitozaUI Light', value: semanticColors.light.background }
      ]
    },

    darkMode: {
      current: 'dark',
      dark: customTheme,
      light: {
        ...customTheme,
        base: 'light',
        appBg: semanticColors.light.background,
        appContentBg: semanticColors.light.surface,
        appBorderColor: semanticColors.light.border,
        textColor: semanticColors.light.text,
        barSelectedColor: semanticColors.light.actionPrimary
      }
    },

    viewMode: 'docs',
    previewTabs: {
      'storybook/docs/panel': { index: -1 }
    }
  }
};

export default preview;
