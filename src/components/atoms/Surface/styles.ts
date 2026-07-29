import { css, styled } from 'styled-components';
import { radiusRoles, semanticColors } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { SurfaceVariant } from '.';

type StyledSurfaceProps = {
  $variant?: SurfaceVariant;
};

const variantStyles = {
  default: css`
    background-color: ${semanticColors.dark.surface};
  `,
  secondary: css`
    background-color: ${semanticColors.dark.backgroundAlt};
  `
} as const;

export const StyledSurface = styled.div<StyledSurfaceProps>`
  box-sizing: border-box;
  border: ${borders.width.hairline} ${borders.style.solid} ${semanticColors.dark.border};
  border-radius: ${radiusRoles.surface};

  ${({ $variant = 'default' }) => variantStyles[$variant]}
`;
