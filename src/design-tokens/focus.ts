import { borderWidths } from './borders';
import { motion } from './motion';

export const focus = {
  outlineWidth: borderWidths.focus,
  outlineOffset: '2px',
  ringWidth: '3px',
  transitionDuration: motion.duration.fast
} as const;
