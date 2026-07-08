import type { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
};

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <S.StyledButton variant={variant} {...props} />;
};

export default Button;
