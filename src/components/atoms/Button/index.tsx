import { forwardRef, type ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', type = 'button', ...props }, ref) => {
    return <S.StyledButton ref={ref} type={type} $variant={variant} {...props} />;
  }
);

Button.displayName = 'Button';

export default Button;
