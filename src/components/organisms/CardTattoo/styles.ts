import { styled } from '@stitches/react';
import { colors, space, typography } from '@/design-tokens';
import { fontSizes } from '@/design-tokens/font-sizes';

export const Description = styled('p', {
  marginTop: space[2],
  fontSize: fontSizes.sm,
  lineHeight: 1.4,
  color: colors.textSecondary,
  fontFamily: typography.body,
});
