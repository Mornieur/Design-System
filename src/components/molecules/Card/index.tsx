import { ReactNode } from 'react';
import * as S from './styles';


export type CardProps = {
  title: string;
  children: ReactNode;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
};

export const Card = ({ title, children, elevation = 'md' }: CardProps) => {
  return (
    <S.CardContainer data-elevation={elevation}  data-testid="card-container" elevation={elevation} role="region" aria-label={title}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardBody>{children}</S.CardBody>
    </S.CardContainer>
  );
};
