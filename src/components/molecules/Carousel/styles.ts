import { styled } from '@stitches/react';
import { colors, space, radii, typography } from '@/design-tokens';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  width: '100%',
});

export const Control = styled('button', {
  background: colors.white,
  border: `1px solid ${colors.primary}`,
  borderRadius: radii.round,
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary,
  cursor: 'pointer',
  fontFamily: typography.heading,
  fontSize: '20px',
  transition: 'background .16s, color .16s',
  '&:hover': {
    background: colors.primary,
    color: colors.white,
  }
});

export const Viewport = styled('div', {
  overflow: 'hidden',
  flex: 1
});

export const Container = styled('div', {
  display: 'flex',
  gap: space[2],
  willChange: 'transform'
});

export const Slide = styled('div', {
  scrollSnapAlign: 'start',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Image = styled('img', {
  objectFit: 'cover',
  borderRadius: radii.medium,
  backgroundColor: colors.background,
  display: 'block',
});
