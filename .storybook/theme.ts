import { create } from 'storybook/theming';

export default create({
  base: 'dark',
  colorPrimary: '#7928CA',
  colorSecondary: '#FF3366',

  appBg: '#F5F5F5',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E0E0E0',
  appBorderRadius: 8,

  fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  barTextColor: '#333333',
  barSelectedColor: '#7928CA',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: '#E0E0E0',
  inputTextColor: '#333333',
  inputBorderRadius: 4
});
