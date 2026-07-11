export const radii = {
  none: '0',
  xsmall: '2px',
  small: '4px',
  medium: '6px',
  large: '8px',
  xlarge: '12px',
  pill: '999px',
  round: '50%'
} as const;

export const radiusRoles = {
  none: radii.none,
  dense: radii.xsmall,
  control: radii.small,
  surface: radii.small,
  panel: radii.medium,
  overlay: radii.large,
  expressive: radii.xlarge,
  pill: radii.pill,
  round: radii.round
} as const;
