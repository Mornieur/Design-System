import { ReactNode } from 'react';
import * as S from './styles';

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardBody>{children}</S.CardBody>
    </S.CardContainer>
  );
};
