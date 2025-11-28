import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '..';

describe('Card component', () => {
  it('deve renderizar o título corretamente', () => {
    render(<Card title="Meu Card">Conteúdo</Card>);
    expect(screen.getByText('Meu Card')).toBeInTheDocument();
  });

  it('deve renderizar os children corretamente', () => {
    render(
      <Card title="Teste">
        <p>Dado interno</p>
      </Card>
    );
    expect(screen.getByText('Dado interno')).toBeInTheDocument();
  });

  it('deve aplicar o aria-label com o título', () => {
    render(<Card title="Card Acessível">Teste</Card>);
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'Card Acessível');
  });

  it('deve aplicar o elevation padrão (md)', () => {
    render(<Card title="Título">Teste</Card>);
    const region = screen.getByRole('region');

    expect(region.className).toMatch(/elevation-md/);
  });

  it('deve aplicar o elevation passado via props', () => {
    render(
      <Card title="Título" elevation="lg">
        Teste
      </Card>
    );

    const region = screen.getByRole('region');

    expect(region.className).toMatch(/elevation-lg/);
  });
});
