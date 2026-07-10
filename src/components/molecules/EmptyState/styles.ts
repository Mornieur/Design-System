import styled, { css } from 'styled-components';
import { radiusRoles, semanticColors, space, typography } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { EmptyStateTone } from '.';

interface EmptyStateStyleProps {
  $tone?: EmptyStateTone;
}

const toneStyles = {
  neutral: {
    color: semanticColors.dark.textMuted,
    border: semanticColors.dark.border
  },
  info: {
    color: semanticColors.dark.actionPrimary,
    border: `color-mix(in srgb, ${semanticColors.dark.actionPrimary} 28%, transparent)`
  },
  danger: {
    color: semanticColors.dark.danger,
    border: `color-mix(in srgb, ${semanticColors.dark.danger} 30%, transparent)`
  }
} satisfies Record<EmptyStateTone, { color: string; border: string }>;

export const Root = styled.div<EmptyStateStyleProps>`
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  width: 100%;
  padding: ${space[6]} ${space[4]};
  border: ${borders.width.hairline} ${borders.style.solid};
  border-radius: ${radiusRoles.surface};
  background-color: color-mix(in srgb, ${semanticColors.dark.surface} 72%, transparent);
  text-align: center;

  ${({ $tone = 'neutral' }) => css`
    border-color: ${toneStyles[$tone].border};
  `}
`;

export const IconSlot = styled.div<EmptyStateStyleProps>`
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${space[3]};
  border: ${borders.width.hairline} ${borders.style.solid};
  border-color: ${({ $tone = 'neutral' }) => toneStyles[$tone].border};
  border-radius: ${radiusRoles.surface};
  background-color: color-mix(in srgb, currentColor 8%, transparent);
  color: ${({ $tone = 'neutral' }) => toneStyles[$tone].color};

  svg {
    width: 22px;
    height: 22px;
    stroke-width: 1.8;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: ${semanticColors.dark.text};
  font-family: ${typography.roles.heading};
  font-size: 1rem;
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.tight};
`;

export const Description = styled.p`
  max-width: 44ch;
  margin: ${space[2]} 0 0;
  color: ${semanticColors.dark.textSecondary};
  font-family: ${typography.roles.interface};
  font-size: 0.875rem;
  line-height: ${typography.lineHeights.normal};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${space[2]};
  margin-top: ${space[4]};
`;
