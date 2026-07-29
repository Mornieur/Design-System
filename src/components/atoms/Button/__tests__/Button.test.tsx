import { render, screen, fireEvent } from '@testing-library/react';
import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import Button from '..';
import { semanticColors } from '@/design-tokens';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('defaults to type button while preserving an explicit type', () => {
    const { rerender } = render(<Button>Safe action</Button>);

    expect(screen.getByRole('button', { name: 'Safe action' })).toHaveAttribute('type', 'button');

    rerender(<Button type="submit">Submit action</Button>);

    expect(screen.getByRole('button', { name: 'Submit action' })).toHaveAttribute('type', 'submit');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Disabled' });

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('passes className and style to the native button', () => {
    render(
      <Button className="custom-button" style={{ width: 120 }}>
        Styled
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Styled' });

    expect(button).toHaveClass('custom-button');
    expect(button).toHaveStyle({ width: '120px' });
  });

  it('forwards ref to the native button', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Ref button</Button>);

    expect(ref.current).toBe(screen.getByRole('button', { name: 'Ref button' }));
  });

  it('applies variant primary', () => {
    render(<Button variant="primary">Primary</Button>);
    const btn = screen.getByText('Primary');
    expect(btn).toHaveStyle({
      backgroundColor: semanticColors.dark.actionPrimary,
      color: semanticColors.dark.actionPrimaryText
    });
  });

  it('applies variant secondary', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByText('Secondary');
    expect(btn).toHaveStyle({
      backgroundColor: semanticColors.dark.actionSecondary,
      color: semanticColors.dark.actionSecondaryText
    });
  });

  it('applies variant accent', () => {
    render(<Button variant="accent">Accent</Button>);
    const btn = screen.getByText('Accent');
    expect(btn).toHaveStyle({
      backgroundColor: semanticColors.dark.surface,
      color: semanticColors.dark.accent
    });
  });

  it('does not leak transient style props to the DOM', () => {
    render(<Button variant="primary">Transient props</Button>);

    expect(screen.getByRole('button', { name: 'Transient props' })).not.toHaveAttribute(
      '$variant'
    );
  });
});
