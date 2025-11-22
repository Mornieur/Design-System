import { create } from 'storybook/theming/create';
import { typography } from '../src/design-tokens/typography';

export default create({
  base: 'dark',
  brandTitle: 'Ayumi Design System',
  brandUrl: 'https://github.com/Mornieur/Design-System',
  brandImage: '/logo.png',

  colorPrimary: '#7928CA',
  colorSecondary: '#FF3366',

  appBg: '#1A1A1A',
  appContentBg: '#1F1F1F',
  appBorderColor: '#333333',
  appBorderRadius: 8,

  fontBase: typography.body,
  fontCode: 'monospace',

  textColor: '#FFFFFF',
  textInverseColor: '#000000',

  barTextColor: '#CCCCCC',
  barSelectedColor: '#7928CA',
  barBg: '#1F1F1F',

  inputBg: '#2A2A2A',
  inputBorder: '#444444',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4
});
