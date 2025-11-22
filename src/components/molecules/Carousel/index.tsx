import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as S from './styles';

//TODO: criar testes unitários

export type CarouselProps = {
  images: string[];
  alt?: string;
  height?: number;
  width?: number;
  loop?: boolean;
};

export const Carousel = ({
  images,
  alt = 'Carousel image',
  height = 220,
  width = 220,
  loop = false
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <S.Wrapper>
      <S.Control onClick={scrollPrev} aria-label="scroll left">‹</S.Control>

      <S.Viewport ref={emblaRef}>
        <S.Container>
          {images.map((src, idx) => (
            <S.Slide key={idx} style={{ minWidth: width }}>
              <S.Image src={src} alt={`${alt} ${idx + 1}`} style={{ width, height }} />
            </S.Slide>
          ))}
        </S.Container>
      </S.Viewport>

      <S.Control onClick={scrollNext} aria-label="scroll right">›</S.Control>
    </S.Wrapper>
  );
};

export default Carousel;
