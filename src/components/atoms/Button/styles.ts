import { styled } from 'styled-components';
import { buttonBaseStyles, buttonTextSizeStyles, buttonVariantStyles, type ButtonVariant } from './shared';

interface ButtonProps {
  $variant?: ButtonVariant;
}

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBaseStyles}
  ${buttonTextSizeStyles.md}
  ${({ $variant = 'primary' }) => buttonVariantStyles($variant)}
`;
