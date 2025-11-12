import type { Preview } from '@storybook/react';
import { theme } from '../src/design-tokens/stitches.config';
// import { withThemes } from '@storybook/addon-essentials';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: theme.colors.background.value },
        { name: 'dark', value: '#1A1A1A' }
      ]
    },

    themes: {
      default: 'light',
      list: [
        { name: 'light', color: theme.colors.background.value },
        { name: 'dark', color: '#1A1A1A' }
      ]
    }
  }
  // decorators: [
  //   // Se quiser adicionar decorator global de tema
  //   (Story) => <Story />
  // ]
};

export default preview;
