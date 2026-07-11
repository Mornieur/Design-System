import { opacity } from './opacity';

export const stateOpacity = {
  hover: '0.08',
  active: '0.12',
  selected: '0.16',
  focus: '0.24',
  disabled: opacity.disabled
} as const;

export const states = {
  opacity: stateOpacity
} as const;
