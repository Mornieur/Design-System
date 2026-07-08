import styled, { css } from 'styled-components';
import { colors, typography, radii, space } from '@/design-tokens';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  $variant?: ButtonVariant;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${typography.body};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${radii.medium};
  padding: ${space[3]} ${space[4]};
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${colors.info};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.56;
  }

  ${({ $variant = 'primary' }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background-color: ${colors.secondary};
          color: ${colors.white};
        `;
      case 'accent':
        return css`
          background-color: ${colors.accent};
          color: ${colors.black};
        `;
      case 'primary':
      default:
        return css`
          background-color: ${colors.primary};
          color: ${colors.white};
        `;
    }
  }}
`;
