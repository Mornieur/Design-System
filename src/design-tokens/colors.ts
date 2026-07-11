export const primitiveColors = {
  blueGray: {
    50: '#DDE4F0',
    100: '#CBD5E1',
    200: '#94A3B8',
    300: '#64748B',
    400: '#475569',
    500: '#334155',
    600: '#1E293B',
    700: '#111827',
    800: '#0D1220',
    850: '#0B0E18',
    900: '#07090F',
    950: '#04060B'
  },
  cyan: {
    500: '#00B4D8',
    600: '#0284C7',
    700: '#0369A1',
    950: '#040C10'
  },
  coral: {
    500: '#FF6B6F',
    600: '#D5485A'
  },
  amber: {
    400: '#FFC347',
    500: '#F59E0B',
    700: '#8A5B00'
  },
  green: {
    500: '#10B981',
    900: '#03200F'
  },
  red: {
    500: '#EF4444',
    600: '#DC2626',
    900: '#1A0202'
  },
  indigo: {
    400: '#818CF8',
    950: '#07081A'
  },
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E8EDF4',
    300: '#CBD5E1',
    600: '#64748B',
    900: '#0F172A'
  },
  white: '#FFFFFF',
  black: '#000000'
} as const;

export const colorRoles = {
  dark: {
    background: {
      canvas: primitiveColors.blueGray[900],
      subtle: primitiveColors.blueGray[850]
    },
    surface: {
      default: primitiveColors.blueGray[800],
      raised: primitiveColors.blueGray[700],
      floating: primitiveColors.blueGray[600],
      overlay: primitiveColors.blueGray[950]
    },
    text: {
      primary: primitiveColors.blueGray[50],
      secondary: primitiveColors.blueGray[200],
      muted: primitiveColors.blueGray[300],
      inverse: primitiveColors.cyan[950]
    },
    border: {
      subtle: 'rgba(148, 163, 184, 0.10)',
      default: 'rgba(148, 163, 184, 0.16)',
      strong: 'rgba(148, 163, 184, 0.28)',
      accent: 'rgba(0, 180, 216, 0.35)'
    },
    action: {
      primary: primitiveColors.cyan[500],
      primaryHover: primitiveColors.cyan[600],
      primaryText: primitiveColors.cyan[950],
      secondary: primitiveColors.blueGray[700],
      secondaryHover: primitiveColors.blueGray[600],
      secondaryText: primitiveColors.blueGray[50]
    },
    accent: {
      brand: primitiveColors.coral[500],
      brandHover: primitiveColors.coral[600],
      brandText: primitiveColors.blueGray[950],
      subtle: 'rgba(255, 107, 111, 0.10)'
    },
    focus: {
      ring: primitiveColors.cyan[500],
      shadow: 'rgba(0, 180, 216, 0.35)'
    },
    selection: {
      background: 'rgba(0, 180, 216, 0.12)',
      border: 'rgba(0, 180, 216, 0.45)',
      text: primitiveColors.cyan[500]
    },
    feedback: {
      success: primitiveColors.green[500],
      successText: primitiveColors.green[900],
      warning: primitiveColors.amber[500],
      warningText: '#1A0F00',
      danger: primitiveColors.red[500],
      dangerText: primitiveColors.red[900],
      info: primitiveColors.indigo[400],
      infoText: primitiveColors.indigo[950]
    }
  },
  light: {
    background: {
      canvas: primitiveColors.gray[100],
      subtle: primitiveColors.gray[50]
    },
    surface: {
      default: primitiveColors.white,
      raised: primitiveColors.gray[50],
      floating: primitiveColors.white,
      overlay: primitiveColors.white
    },
    text: {
      primary: primitiveColors.gray[900],
      secondary: primitiveColors.blueGray[500],
      muted: primitiveColors.gray[600],
      inverse: primitiveColors.white
    },
    border: {
      subtle: 'rgba(15, 23, 42, 0.09)',
      default: 'rgba(15, 23, 42, 0.14)',
      strong: 'rgba(15, 23, 42, 0.24)',
      accent: 'rgba(2, 132, 199, 0.35)'
    },
    action: {
      primary: primitiveColors.cyan[700],
      primaryHover: primitiveColors.cyan[600],
      primaryText: primitiveColors.white,
      secondary: primitiveColors.gray[200],
      secondaryHover: primitiveColors.gray[300],
      secondaryText: primitiveColors.blueGray[500]
    },
    accent: {
      brand: primitiveColors.coral[500],
      brandHover: primitiveColors.coral[600],
      brandText: primitiveColors.gray[900],
      subtle: 'rgba(213, 72, 90, 0.08)'
    },
    focus: {
      ring: primitiveColors.cyan[600],
      shadow: 'rgba(2, 132, 199, 0.30)'
    },
    selection: {
      background: 'rgba(2, 132, 199, 0.10)',
      border: 'rgba(2, 132, 199, 0.35)',
      text: primitiveColors.cyan[700]
    },
    feedback: {
      success: '#147A43',
      successText: primitiveColors.white,
      warning: primitiveColors.amber[700],
      warningText: primitiveColors.white,
      danger: '#B42318',
      dangerText: primitiveColors.white,
      info: primitiveColors.cyan[700],
      infoText: primitiveColors.white
    }
  }
} as const;

export const semanticColors = {
  dark: {
    background: colorRoles.dark.background.canvas,
    backgroundAlt: colorRoles.dark.background.subtle,
    surface: colorRoles.dark.surface.default,
    surfaceRaised: colorRoles.dark.surface.raised,
    surfaceFloating: colorRoles.dark.surface.floating,
    text: colorRoles.dark.text.primary,
    textSecondary: colorRoles.dark.text.secondary,
    textMuted: colorRoles.dark.text.muted,
    border: colorRoles.dark.border.default,
    borderSubtle: colorRoles.dark.border.subtle,
    borderStrong: colorRoles.dark.border.strong,
    focus: colorRoles.dark.focus.ring,
    actionPrimary: colorRoles.dark.action.primary,
    actionPrimaryHover: colorRoles.dark.action.primaryHover,
    actionPrimaryText: colorRoles.dark.action.primaryText,
    actionSecondary: colorRoles.dark.action.secondary,
    actionSecondaryHover: colorRoles.dark.action.secondaryHover,
    actionSecondaryText: colorRoles.dark.action.secondaryText,
    accent: colorRoles.dark.accent.brand,
    accentHover: colorRoles.dark.accent.brandHover,
    accentText: colorRoles.dark.accent.brandText,
    selection: colorRoles.dark.selection.background,
    selectionBorder: colorRoles.dark.selection.border,
    success: colorRoles.dark.feedback.success,
    successText: colorRoles.dark.feedback.successText,
    warning: colorRoles.dark.feedback.warning,
    warningText: colorRoles.dark.feedback.warningText,
    danger: colorRoles.dark.feedback.danger,
    dangerText: colorRoles.dark.feedback.dangerText,
    info: colorRoles.dark.feedback.info,
    infoText: colorRoles.dark.feedback.infoText
  },
  light: {
    background: colorRoles.light.background.canvas,
    backgroundAlt: colorRoles.light.background.subtle,
    surface: colorRoles.light.surface.default,
    surfaceRaised: colorRoles.light.surface.raised,
    surfaceFloating: colorRoles.light.surface.floating,
    text: colorRoles.light.text.primary,
    textSecondary: colorRoles.light.text.secondary,
    textMuted: colorRoles.light.text.muted,
    border: colorRoles.light.border.default,
    borderSubtle: colorRoles.light.border.subtle,
    borderStrong: colorRoles.light.border.strong,
    focus: colorRoles.light.focus.ring,
    actionPrimary: colorRoles.light.action.primary,
    actionPrimaryHover: colorRoles.light.action.primaryHover,
    actionPrimaryText: colorRoles.light.action.primaryText,
    actionSecondary: colorRoles.light.action.secondary,
    actionSecondaryHover: colorRoles.light.action.secondaryHover,
    actionSecondaryText: colorRoles.light.action.secondaryText,
    accent: colorRoles.light.accent.brand,
    accentHover: colorRoles.light.accent.brandHover,
    accentText: colorRoles.light.accent.brandText,
    selection: colorRoles.light.selection.background,
    selectionBorder: colorRoles.light.selection.border,
    success: colorRoles.light.feedback.success,
    successText: colorRoles.light.feedback.successText,
    warning: colorRoles.light.feedback.warning,
    warningText: colorRoles.light.feedback.warningText,
    danger: colorRoles.light.feedback.danger,
    dangerText: colorRoles.light.feedback.dangerText,
    info: colorRoles.light.feedback.info,
    infoText: colorRoles.light.feedback.infoText
  }
} as const;

export const legacyColors = {
  primary: primitiveColors.coral[500],
  primaryDark: primitiveColors.coral[600],
  secondary: '#FF8A3D',
  accent: '#FFC347',
  gradientStart: '#FF4F79',
  gradientEnd: '#FFCA5F'
} as const;

export const colors = {
  // Compatibility aliases. New work should prefer semantic color roles.
  primary: legacyColors.primary,
  primaryDark: legacyColors.primaryDark,
  secondary: legacyColors.secondary,
  accent: legacyColors.accent,

  gradientStart: legacyColors.gradientStart,
  gradientEnd: legacyColors.gradientEnd,

  // Default dark foundation aliases.
  background: semanticColors.dark.background,
  backgroundAlt: semanticColors.dark.backgroundAlt,
  surface: semanticColors.dark.surface,
  surfaceRaised: semanticColors.dark.surfaceRaised,
  surfaceFloating: semanticColors.dark.surfaceFloating,
  text: semanticColors.dark.text,
  textSecondary: semanticColors.dark.textSecondary,
  textMuted: semanticColors.dark.textMuted,
  border: semanticColors.dark.border,
  borderSubtle: semanticColors.dark.borderSubtle,
  borderStrong: semanticColors.dark.borderStrong,
  white: primitiveColors.white,
  black: primitiveColors.black,

  // Feedback aliases.
  success: semanticColors.dark.success,
  warning: semanticColors.dark.warning,
  error: semanticColors.dark.danger,
  danger: semanticColors.dark.danger,
  info: semanticColors.dark.info,
  focus: semanticColors.dark.focus
} as const;
