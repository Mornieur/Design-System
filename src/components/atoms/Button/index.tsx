import { forwardRef, type ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    return <S.StyledButton ref={ref} $variant={variant} {...props} />;
  }
);

Button.displayName = 'Button';

export default Button;
