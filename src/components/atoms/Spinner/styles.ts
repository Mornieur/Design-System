import styled, { css, keyframes } from 'styled-components';
import { semanticColors } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { SpinnerSize, SpinnerTone } from '.';

interface SpinnerStyleProps {
  $size?: SpinnerSize;
  $tone?: SpinnerTone;
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles = {
  sm: '16px',
  md: '24px',
  lg: '32px'
} satisfies Record<SpinnerSize, string>;

const toneStyles = {
  primary: semanticColors.dark.actionPrimary,
  neutral: semanticColors.dark.textMuted,
  success: semanticColors.dark.success,
  warning: semanticColors.dark.warning,
  danger: semanticColors.dark.danger,
  info: semanticColors.dark.info,
  inherit: 'currentColor'
} satisfies Record<SpinnerTone, string>;

export const Spinner = styled.span<SpinnerStyleProps>`
  box-sizing: border-box;
  display: inline-block;
  flex-shrink: 0;
  width: ${({ $size = 'md' }) => sizeStyles[$size]};
  height: ${({ $size = 'md' }) => sizeStyles[$size]};
  border: ${borders.width.focus} ${borders.style.solid}
    color-mix(in srgb, currentColor 22%, transparent);
  border-top-color: ${({ $tone = 'primary' }) => toneStyles[$tone]};
  border-radius: 50%;
  color: ${({ $tone = 'primary' }) => toneStyles[$tone]};
  animation: ${rotate} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1.6s;
  }

  ${({ $size = 'md' }) =>
    $size === 'sm'
      ? css`
          border-width: ${borders.width.hairline};
        `
      : null}
`;
