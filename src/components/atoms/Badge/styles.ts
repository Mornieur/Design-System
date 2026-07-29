import { css, styled } from 'styled-components';
import {
  colorRoles,
  motion,
  radiusRoles,
  semanticColors,
  space,
  typography
} from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { BadgeSize, BadgeVariant } from '.';

interface StyledBadgeProps {
  $variant?: BadgeVariant;
  $size?: BadgeSize;
  $outlined?: boolean;
}

const badgeVariantStyles = {
  neutral: {
    color: semanticColors.dark.textMuted,
    border: semanticColors.dark.border,
    background: `color-mix(in srgb, ${semanticColors.dark.surfaceRaised} 42%, transparent)`,
    outlinedBorder: semanticColors.dark.borderStrong
  },
  primary: {
    color: semanticColors.dark.actionPrimary,
    border: colorRoles.dark.selection.border,
    background: colorRoles.dark.selection.background,
    outlinedBorder: colorRoles.dark.selection.border
  },
  success: {
    color: semanticColors.dark.success,
    border: `color-mix(in srgb, ${semanticColors.dark.success} 30%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.success} 9%, transparent)`,
    outlinedBorder: `color-mix(in srgb, ${semanticColors.dark.success} 48%, transparent)`
  },
  warning: {
    color: semanticColors.dark.warning,
    border: `color-mix(in srgb, ${semanticColors.dark.warning} 30%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.warning} 9%, transparent)`,
    outlinedBorder: `color-mix(in srgb, ${semanticColors.dark.warning} 48%, transparent)`
  },
  danger: {
    color: semanticColors.dark.danger,
    border: `color-mix(in srgb, ${semanticColors.dark.danger} 30%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.danger} 9%, transparent)`,
    outlinedBorder: `color-mix(in srgb, ${semanticColors.dark.danger} 48%, transparent)`
  },
  info: {
    color: semanticColors.dark.info,
    border: `color-mix(in srgb, ${semanticColors.dark.info} 30%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.info} 9%, transparent)`,
    outlinedBorder: `color-mix(in srgb, ${semanticColors.dark.info} 48%, transparent)`
  }
} satisfies Record<
  BadgeVariant,
  {
    color: string;
    border: string;
    background: string;
    outlinedBorder: string;
  }
>;

const sizeStyles = {
  sm: css`
    min-height: 20px;
    padding: ${space[0]} ${space[2]};
    font-size: 0.6875rem;
  `,
  md: css`
    min-height: 24px;
    padding: ${space[1]} ${space[2]};
    font-size: 0.75rem;
  `
} satisfies Record<BadgeSize, ReturnType<typeof css>>;

export const StyledBadge = styled.span<StyledBadgeProps>`
  box-sizing: border-box;
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: ${borders.width.hairline};
  border-style: ${borders.style.solid};
  border-radius: ${radiusRoles.dense};
  font-family: ${typography.roles.data};
  font-weight: ${typography.weights.medium};
  line-height: ${typography.lineHeights.tight};
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  transition:
    background-color ${motion.duration.fast} ${motion.easing.standard},
    border-color ${motion.duration.fast} ${motion.easing.standard},
    color ${motion.duration.fast} ${motion.easing.standard};

  ${({ $size = 'md' }) => sizeStyles[$size]}

  ${({ $outlined = false, $variant = 'neutral' }) => {
    const variant = badgeVariantStyles[$variant];

    return css`
      color: ${variant.color};
      border-color: ${$outlined ? variant.outlinedBorder : variant.border};
      background-color: ${$outlined ? 'transparent' : variant.background};
    `;
  }}
`;
