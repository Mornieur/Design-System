import { styled } from '@stitches/react';
import { colors, space, radii, fonts } from '@/design-tokens';

export const CardContainer = styled('div', {
  backgroundColor: colors.white,
  borderRadius: radii.large,
  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  padding: space[4],
  display: 'flex',
  flexDirection: 'column',
  gap: space[3]
});

export const CardTitle = styled('h3', {
  fontFamily: fonts.heading,
  fontSize: '18px',
  color: colors.text,
  margin: 0
});

export const CardBody = styled('div', {
  fontFamily: fonts.body,
  fontSize: '14px',
  color: colors.text
});
