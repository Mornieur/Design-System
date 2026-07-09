import { shadows } from './shadows';
import { colorRoles } from './colors';

export const elevation = {
  none: shadows.none,
  surface: shadows.none,
  raised: shadows.sm,
  floating: shadows.md,
  overlay: shadows.lg,
  focus: shadows.focus,
  accent: shadows.neon
} as const;

export const surfaceElevation = {
  dark: {
    background: {
      backgroundColor: colorRoles.dark.background.canvas,
      borderColor: colorRoles.dark.border.subtle,
      boxShadow: shadows.none
    },
    surface: {
      backgroundColor: colorRoles.dark.surface.default,
      borderColor: colorRoles.dark.border.subtle,
      boxShadow: shadows.none
    },
    raised: {
      backgroundColor: colorRoles.dark.surface.raised,
      borderColor: colorRoles.dark.border.default,
      boxShadow: shadows.none
    },
    floating: {
      backgroundColor: colorRoles.dark.surface.floating,
      borderColor: colorRoles.dark.border.strong,
      boxShadow: shadows.sm
    },
    overlay: {
      backgroundColor: colorRoles.dark.surface.overlay,
      borderColor: colorRoles.dark.border.strong,
      boxShadow: shadows.md
    }
  },
  light: {
    background: {
      backgroundColor: colorRoles.light.background.canvas,
      borderColor: colorRoles.light.border.subtle,
      boxShadow: shadows.none
    },
    surface: {
      backgroundColor: colorRoles.light.surface.default,
      borderColor: colorRoles.light.border.subtle,
      boxShadow: shadows.none
    },
    raised: {
      backgroundColor: colorRoles.light.surface.raised,
      borderColor: colorRoles.light.border.default,
      boxShadow: shadows.sm
    },
    floating: {
      backgroundColor: colorRoles.light.surface.floating,
      borderColor: colorRoles.light.border.default,
      boxShadow: shadows.md
    },
    overlay: {
      backgroundColor: colorRoles.light.surface.overlay,
      borderColor: colorRoles.light.border.strong,
      boxShadow: shadows.lg
    }
  }
} as const;
