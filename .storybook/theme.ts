import { create } from 'storybook/theming/create';
import {
  colorRoles,
  radii,
  semanticColors,
  typography
} from '../src/design-tokens';

export default create({
  base: 'dark',
  brandTitle: 'FeitozaUI',
  brandUrl: 'https://github.com/Mornieur/design-system',
  brandImage: '/logo.jpg',

  colorPrimary: semanticColors.dark.actionPrimary,
  colorSecondary: semanticColors.dark.accent,

  appBg: semanticColors.dark.background,
  appContentBg: semanticColors.dark.surface,
  appPreviewBg: semanticColors.dark.backgroundAlt,
  appBorderColor: semanticColors.dark.border,
  appBorderRadius: Number.parseInt(radii.small, 10),

  fontBase: typography.roles.interface,
  fontCode: typography.roles.code,

  textColor: semanticColors.dark.text,
  textInverseColor: semanticColors.dark.actionPrimaryText,

  barTextColor: semanticColors.dark.textSecondary,
  barSelectedColor: semanticColors.dark.actionPrimary,
  barBg: colorRoles.dark.background.subtle,

  inputBg: semanticColors.dark.surfaceRaised,
  inputBorder: semanticColors.dark.border,
  inputTextColor: semanticColors.dark.text,
  inputBorderRadius: Number.parseInt(radii.small, 10)
});
