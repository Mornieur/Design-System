import { styled } from '@stitches/react';
import { colors, space, radii, typography } from '@/design-tokens';

export const StyledButton = styled('button', {
  fontFamily: typography.body,
  borderRadius: radii.medium,
  padding: `${space[3]} ${space[4]}`,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  variants: {
    variant: {
      primary: { backgroundColor: colors.primary, color: colors.white },
      secondary: { backgroundColor: colors.secondary, color: colors.white },
      accent: { backgroundColor: colors.accent, color: colors.black }
    }
  },
  '&:hover': {
    opacity: 0.8
  }
});
