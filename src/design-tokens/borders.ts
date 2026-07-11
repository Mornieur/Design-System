export const borderWidths = {
  none: '0',
  hairline: '1px',
  focus: '2px'
} as const;

export const borderStyles = {
  solid: 'solid'
} as const;

export const borders = {
  width: borderWidths,
  style: borderStyles
} as const;
