import * as S from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
};

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <S.StyledButton variant={variant} {...props} />;
};

export default Button;