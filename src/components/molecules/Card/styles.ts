import { styled } from '@stitches/react';
import { colors, space, radii, fonts } from '@/design-tokens';

export const CardContainer = styled('div', {
  backgroundColor: colors.white,
  borderRadius: radii.large,
  padding: space[4],
  display: 'flex',
  flexDirection: 'column',
  gap: space[3],
  fontFamily: fonts.body,

  variants: {
    elevation: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: '0 1px 4px rgba(0,0,0,0.08)' },
      md: { boxShadow: '0 2px 12px rgba(0,0,0,0.10)' },
      lg: { boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }
    }
  },

  defaultVariants: {
    elevation: 'md'
  }
});

export const CardTitle = styled('h3', {
  fontFamily: fonts.heading,
  fontSize: '18px',
  fontWeight: 600,
  color: colors.text,
  margin: 0
});

export const CardBody = styled('div', {
  fontSize: '14px',
  lineHeight: 1.5,
  color: colors.text
});
