import styled, { css } from 'styled-components';
import { colorRoles, motion, radii, semanticColors, space, typography } from '@/design-tokens';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  $variant?: ButtonVariant;
}

export const StyledButton = styled.button<ButtonProps>`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${space[2]};
  font-family: ${typography.roles.interface};
  font-size: 0.9375rem;
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.tight};
  border-radius: ${radii.small};
  padding: ${space[3]} ${space[4]};
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

  ${({ $variant = 'primary' }) => {
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
  }}

  &:disabled {
    cursor: not-allowed;
    background-color: ${semanticColors.dark.surfaceRaised};
    color: ${semanticColors.dark.textSecondary};
    border-color: ${semanticColors.dark.borderSubtle};
    opacity: 1;
  }
`;
