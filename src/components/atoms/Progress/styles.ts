import { css, keyframes, styled } from 'styled-components';
import { motion, radiusRoles, semanticColors } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { ProgressSize, ProgressTone } from '.';

interface TrackProps {
  $size?: ProgressSize;
}

interface IndicatorProps {
  $tone?: ProgressTone;
  $indeterminate?: boolean;
}

const indeterminate = keyframes`
  0% {
    transform: translateX(-120%);
  }

  100% {
    transform: translateX(280%);
  }
`;

const sizes = {
  sm: '4px',
  md: '8px'
} satisfies Record<ProgressSize, string>;

const tones = {
  primary: semanticColors.dark.actionPrimary,
  success: semanticColors.dark.success,
  warning: semanticColors.dark.warning,
  danger: semanticColors.dark.danger,
  info: semanticColors.dark.info
} satisfies Record<ProgressTone, string>;

export const Track = styled.div<TrackProps>`
  position: relative;
  width: 100%;
  height: ${({ $size = 'md' }) => sizes[$size]};
  overflow: hidden;
  border: ${borders.width.hairline} ${borders.style.solid} ${semanticColors.dark.borderSubtle};
  border-radius: ${radiusRoles.dense};
  background-color: color-mix(in srgb, ${semanticColors.dark.surfaceRaised} 62%, transparent);
`;

export const Indicator = styled.div<IndicatorProps>`
  height: 100%;
  border-radius: inherit;
  background-color: ${({ $tone = 'primary' }) => tones[$tone]};
  transition: width ${motion.duration.normal} ${motion.easing.standard};

  ${({ $indeterminate = false }) =>
    $indeterminate
      ? css`
          animation: ${indeterminate} 1.4s ease-in-out infinite;
        `
      : css`
          animation: none;
        `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;
