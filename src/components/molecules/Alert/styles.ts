import styled, { css } from 'styled-components';
import { motion, radiusRoles, semanticColors, space, typography } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { AlertVariant } from '.';

interface AlertStyleProps {
  $variant?: AlertVariant;
}

const variantStyles = {
  neutral: {
    color: semanticColors.dark.textSecondary,
    border: semanticColors.dark.border,
    background: `color-mix(in srgb, ${semanticColors.dark.surfaceRaised} 42%, transparent)`
  },
  info: {
    color: semanticColors.dark.info,
    border: `color-mix(in srgb, ${semanticColors.dark.info} 30%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.info} 8%, transparent)`
  },
  success: {
    color: semanticColors.dark.success,
    border: `color-mix(in srgb, ${semanticColors.dark.success} 30%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.success} 8%, transparent)`
  },
  warning: {
    color: semanticColors.dark.warning,
    border: `color-mix(in srgb, ${semanticColors.dark.warning} 32%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.warning} 8%, transparent)`
  },
  danger: {
    color: semanticColors.dark.danger,
    border: `color-mix(in srgb, ${semanticColors.dark.danger} 34%, transparent)`,
    background: `color-mix(in srgb, ${semanticColors.dark.danger} 8%, transparent)`
  }
} satisfies Record<AlertVariant, { color: string; border: string; background: string }>;

export const Root = styled.div<AlertStyleProps>`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${space[3]};
  width: 100%;
  padding: ${space[3]} ${space[4]};
  border: ${borders.width.hairline} ${borders.style.solid};
  border-radius: ${radiusRoles.surface};
  font-family: ${typography.roles.interface};
  transition:
    background-color ${motion.duration.fast} ${motion.easing.standard},
    border-color ${motion.duration.fast} ${motion.easing.standard};

  ${({ $variant = 'info' }) => {
    const variant = variantStyles[$variant];

    return css`
      border-color: ${variant.border};
      background-color: ${variant.background};
    `;
  }}
`;

export const IconSlot = styled.span<AlertStyleProps>`
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
  color: ${({ $variant = 'info' }) => variantStyles[$variant].color};

  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2;
  }
`;

export const Content = styled.div`
  min-width: 0;
`;

export const Title = styled.div`
  color: ${semanticColors.dark.text};
  font-size: 0.875rem;
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.tight};
`;

export const Description = styled.div`
  margin-top: ${space[1]};
  color: ${semanticColors.dark.textSecondary};
  font-size: 0.8125rem;
  line-height: ${typography.lineHeights.normal};

  &:first-child {
    margin-top: 0;
  }
`;
