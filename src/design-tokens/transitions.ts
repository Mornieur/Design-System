import { motion } from './motion';

export const transitionProperties = {
  colors: 'background-color, border-color, color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
  common: 'background-color, border-color, color, box-shadow, opacity'
} as const;

export const transitions = {
  fast: `${transitionProperties.common} ${motion.duration.fast} ${motion.easing.standard}`,
  normal: `${transitionProperties.common} ${motion.duration.normal} ${motion.easing.standard}`,
  slow: `${transitionProperties.common} ${motion.duration.slow} ${motion.easing.standard}`
} as const;
