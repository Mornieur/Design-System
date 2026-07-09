import { colorRoles, semanticColors } from './colors';
import { borders } from './borders';
import { elevation, surfaceElevation } from './elevation';
import { focus } from './focus';
import { radiusRoles } from './radii';
import { states } from './states';
import { transitions } from './transitions';
import { typography } from './typography';
import { zIndices } from './z-index';

export const semanticTokens = {
  color: semanticColors,
  colorRole: colorRoles,
  border: borders,
  elevation,
  surfaceElevation,
  focus,
  radius: radiusRoles,
  state: states,
  typography: typography.roles,
  transition: transitions,
  layer: zIndices
} as const;
