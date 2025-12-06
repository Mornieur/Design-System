import styled, { css } from 'styled-components';
import { colors, typography, radii, space } from '@/design-tokens';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  variant?: ButtonVariant;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${typography.body};
  border-radius: ${radii.medium};
  padding: ${space[3]} ${space[4]};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ variant = 'primary' }) => {
    switch (variant) {
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
