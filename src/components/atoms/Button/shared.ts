import { css } from 'styled-components';
import { colorRoles, motion, radii, semanticColors, space, typography } from '@/design-tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'accent';

export type ButtonSize = 'sm' | 'md' | 'lg';

export const buttonBaseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${space[2]};
  font-family: ${typography.roles.interface};
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.tight};
  border-radius: ${radii.small};
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color ${motion.duration.normal} ${motion.easing.standard},
    border-color ${motion.duration.normal} ${motion.easing.standard},
    color ${motion.duration.normal} ${motion.easing.standard},
    box-shadow ${motion.duration.normal} ${motion.easing.standard},
    opacity ${motion.duration.normal} ${motion.easing.standard},
    transform ${motion.duration.fast} ${motion.easing.standard};

  &:focus-visible {
    outline: 2px solid ${semanticColors.dark.focus};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px ${colorRoles.dark.focus.shadow};
  }

  &:not(:disabled):active {
    transform: translateY(1px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${semanticColors.dark.surfaceRaised};
    color: ${semanticColors.dark.textSecondary};
    border-color: ${semanticColors.dark.borderSubtle};
    opacity: 1;
  }
`;

export const buttonTextSizeStyles = {
  sm: css`
    min-height: 40px;
    padding: ${space[2]} ${space[3]};
    font-size: 0.875rem;
  `,
  md: css`
    min-height: 44px;
    padding: ${space[3]} ${space[4]};
    font-size: 0.9375rem;
  `,
  lg: css`
    min-height: 48px;
    padding: ${space[3]} ${space[5]};
    font-size: 1rem;
  `
} satisfies Record<ButtonSize, ReturnType<typeof css>>;

export const iconButtonSizeStyles = {
  sm: css`
    width: calc(${space[8]} + ${space[1]});
    height: calc(${space[8]} + ${space[1]});
  `,
  md: css`
    width: ${space[9]};
    height: ${space[9]};
  `,
  lg: css`
    width: calc(${space[9]} + ${space[1]});
    height: calc(${space[9]} + ${space[1]});
  `
} satisfies Record<ButtonSize, ReturnType<typeof css>>;

export const buttonVariantStyles = ($variant: ButtonVariant = 'primary') => {
  switch ($variant) {
    case 'secondary':
      return css`
        background-color: ${semanticColors.dark.actionSecondary};
        color: ${semanticColors.dark.actionSecondaryText};
        border-color: ${semanticColors.dark.border};

        &:not(:disabled):hover {
          background-color: ${semanticColors.dark.actionSecondaryHover};
          border-color: ${semanticColors.dark.borderStrong};
        }

        &:not(:disabled):active {
          background-color: ${semanticColors.dark.surfaceFloating};
        }
      `;
    case 'accent':
      return css`
        background-color: ${semanticColors.dark.surface};
        color: ${semanticColors.dark.accent};
        border-color: ${colorRoles.dark.accent.brand};

        &:not(:disabled):hover {
          background-color: ${semanticColors.dark.surfaceRaised};
          border-color: ${semanticColors.dark.accentHover};
        }

        &:not(:disabled):active {
          background-color: ${semanticColors.dark.actionSecondary};
        }
      `;
    case 'primary':
    default:
      return css`
        background-color: ${semanticColors.dark.actionPrimary};
        color: ${semanticColors.dark.actionPrimaryText};
        border-color: ${semanticColors.dark.actionPrimary};

        &:not(:disabled):hover {
          background-color: ${semanticColors.dark.actionPrimaryHover};
          border-color: ${semanticColors.dark.actionPrimaryHover};
        }

        &:not(:disabled):active {
          box-shadow: inset 0 0 0 1px ${colorRoles.dark.selection.border};
        }
      `;
  }
};
