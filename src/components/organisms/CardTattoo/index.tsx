import { Card } from '@/components/molecules/Card';
import { Carousel } from '@/components/molecules/Carousel';
import * as S from './styles';

//TODO: criar testes unitários

export type CardTattooProps = {
  title: string;
  images: string[];
  description?: string;
};

export const CardTattoo = ({ title, images, description }: CardTattooProps) => {
  return (
    <Card title={title} elevation="md">
      <Carousel images={images} width={220} height={220} loop />

      {description && <S.Description>{description}</S.Description>}
    </Card>
  );
};
