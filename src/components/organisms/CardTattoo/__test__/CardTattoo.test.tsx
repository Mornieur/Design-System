import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CardTattoo } from '..';
import Image from 'next/image';


vi.mock('@/components/molecules/Card', () => ({
  Card: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div data-testid="mock-card">
      <h3>{title}</h3>
      {children}
    </div>
  ),
}));



vi.mock('@/components/molecules/Carousel', () => ({
  Carousel: ({ images }: { images: string[] }) => (
    <div data-testid="mock-carousel">
      {images.map((src: string, i: number) => (
        <Image key={i} alt={`img-${i}`} src={src} />
      ))}
    </div>
  ),
}));

describe('CardTattoo', () => {
  const images = ['a.jpg', 'b.jpg'];

  it('deve renderizar o título', () => {
    render(<CardTattoo title="Tattoo A" images={images} />);

    expect(screen.getByText('Tattoo A')).toBeInTheDocument();
  });

  it('deve renderizar todas as imagens no Carousel', () => {
    render(<CardTattoo title="T" images={images} />);

    images.forEach((src, i) => {
      const img = screen.getByAltText(`img-${i}`);
      expect(img).toHaveAttribute('src', src);
    });
  });

  it('deve renderizar a descrição quando enviada', () => {
    render(<CardTattoo title="T" images={images} description="Descrição da tattoo" />);

    expect(screen.getByText('Descrição da tattoo')).toBeInTheDocument();
  });

  it('não deve renderizar a descrição quando ela não é enviada', () => {
    render(<CardTattoo title="T" images={images} />);

    const desc = screen.queryByTestId('description');
    expect(desc).not.toBeInTheDocument();
  });
});
