import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '..';
import { colors } from '@/design-tokens';

describe('Button', () => {
  it('renderiza com texto', () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('chama onClick ao clicar', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('aplica variant primary', () => {
    render(<Button variant="primary">Primary</Button>);
    const btn = screen.getByText('Primary');
    expect(btn).toHaveStyle({ backgroundColor: colors.primary });
  });

  it('aplica variant secondary', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByText('Secondary');
    expect(btn).toHaveStyle({ backgroundColor: colors.secondary });
  });

  it('aplica variant accent', () => {
    render(<Button variant="accent">Accent</Button>);
    const btn = screen.getByText('Accent');
    expect(btn).toHaveStyle({ backgroundColor: colors.accent });
  });
});
