import { primitiveColors } from './colors';
import { fontSizes } from './font-sizes';
import { typography } from './typography';
import { space } from './spacing';
import { radii } from './radii';
import { shadows } from './shadows';
import { motion } from './motion';
import { borderStyles, borderWidths } from './borders';
import { opacity } from './opacity';
import { zIndices } from './z-index';

export const primitiveTokens = {
  color: primitiveColors,
  fontFamily: {
    body: typography.body,
    heading: typography.heading,
    accent: typography.accent,
    code: typography.roles.code,
    data: typography.roles.data
  },
  fontSize: fontSizes,
  fontWeight: typography.weights,
  lineHeight: typography.lineHeights,
  space,
  radius: radii,
  shadow: shadows,
  duration: motion.duration,
  easing: motion.easing,
  borderWidth: borderWidths,
  borderStyle: borderStyles,
  opacity,
  zIndex: zIndices
} as const;
