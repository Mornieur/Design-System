import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Carousel } from '..';


const scrollPrevMock = vi.fn();
const scrollNextMock = vi.fn();

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(() => {
    return [
      { current: null },
      {
        scrollPrev: scrollPrevMock,
        scrollNext: scrollNextMock,
      }
    ];
  })
}));

describe('Carousel component', () => {
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

  it('deve renderizar todas as imagens', () => {
    render(<Carousel images={images} />);

    images.forEach((src, i) => {
      const img = screen.getByAltText(`Carousel image ${i + 1}`);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', src);
    });
  });

  it('deve aplicar alt customizado', () => {
    render(<Carousel images={images} alt="Foto" />);
    expect(screen.getByAltText('Foto 1')).toBeInTheDocument();
  });

  it('deve renderizar largura/altura customizadas', () => {
    render(<Carousel images={images} width={300} height={180} />);

    const img = screen.getByAltText('Carousel image 1');
    expect(img).toHaveStyle({ width: '300px', height: '180px' });
  });

  it('deve chamar scrollPrev ao clicar no botão esquerdo', () => {
    scrollPrevMock.mockClear();

    render(<Carousel images={images} />);

    const leftButton = screen.getByLabelText('scroll left');
    fireEvent.click(leftButton);

    expect(scrollPrevMock).toHaveBeenCalledTimes(1);
  });

  it('deve chamar scrollNext ao clicar no botão direito', () => {
    scrollNextMock.mockClear();

    render(<Carousel images={images} />);

    const rightButton = screen.getByLabelText('scroll right');
    fireEvent.click(rightButton);

    expect(scrollNextMock).toHaveBeenCalledTimes(1);
  });

  it('deve renderizar o número correto de slides', () => {
    render(<Carousel images={images} />);

    const renderedSlides = screen.getAllByRole('img');
    expect(renderedSlides.length).toBe(images.length);
  });
});
