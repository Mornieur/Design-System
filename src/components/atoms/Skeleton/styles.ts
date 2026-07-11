import styled, { css, keyframes } from 'styled-components';
import { radiusRoles, semanticColors } from '@/design-tokens';
import type { SkeletonRadius } from '.';

interface SkeletonStyleProps {
  $radius?: SkeletonRadius;
  $animated?: boolean;
}

const pulse = keyframes`
  0%,
  100% {
    opacity: 0.48;
  }

  50% {
    opacity: 0.78;
  }
`;

const radiusStyles = {
  none: radiusRoles.none,
  sm: radiusRoles.dense,
  md: radiusRoles.surface,
  pill: radiusRoles.pill
} satisfies Record<SkeletonRadius, string>;

export const Skeleton = styled.div<SkeletonStyleProps>`
  display: block;
  width: 100%;
  height: 16px;
  border-radius: ${({ $radius = 'sm' }) => radiusStyles[$radius]};
  background:
    linear-gradient(
      90deg,
      color-mix(in srgb, ${semanticColors.dark.surfaceRaised} 70%, transparent),
      color-mix(in srgb, ${semanticColors.dark.textMuted} 14%, transparent),
      color-mix(in srgb, ${semanticColors.dark.surfaceRaised} 70%, transparent)
    );
  background-size: 220% 100%;

  ${({ $animated = true }) =>
    $animated
      ? css`
          animation: ${pulse} 1.6s ease-in-out infinite;

          @media (prefers-reduced-motion: reduce) {
            animation: none;
          }
        `
      : null}
`;
