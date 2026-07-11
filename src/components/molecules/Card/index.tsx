import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return <S.Root ref={ref} {...props} />;
});

Card.displayName = 'Card';

export default Card;
