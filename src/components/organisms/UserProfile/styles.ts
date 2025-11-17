import { styled } from '@stitches/react';
import { colors, space, radii, fonts } from '@/design-tokens';

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colors.background,
  padding: space[4],
  borderRadius: radii.large,
  gap: space[4]
});

export const Avatar = styled('div', {
  width: '64px',
  height: '64px',
  borderRadius: radii.round,
  backgroundColor: colors.tattooInk
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: space[2]
});

export const Name = styled('span', {
  fontFamily: fonts.heading,
  fontSize: '16px',
  color: colors.text
});

export const Role = styled('span', {
  fontFamily: fonts.body,
  fontSize: '14px',
  color: colors.secondary
});
