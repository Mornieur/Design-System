import { createStitches } from '@stitches/react';
import { colors } from './colors';
import { space } from './spacing';
import { radii } from './radii';
import { typography } from './typography';

export const { styled, css, theme, createTheme, globalCss } = createStitches({
  theme: {
    colors,
    space,
    typography,
    radii
  }
});
