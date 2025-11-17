import * as S from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
};

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <S.StyledButton variant={variant} {...props} />;
};
