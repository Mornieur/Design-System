import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { semanticColors, space } from '@/design-tokens';
import Card from '..';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Related content</Card>);

    expect(screen.getByText('Related content')).toBeInTheDocument();
  });

  it('forwards ref to the native div', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>Card ref</Card>);

    expect(ref.current).toBe(screen.getByText('Card ref'));
  });

  it('passes className and style to the native div', () => {
    render(
      <Card className="custom-card" style={{ marginTop: 24 }}>
        Styled card
      </Card>
    );

    const card = screen.getByText('Styled card');

    expect(card).toHaveClass('custom-card');
    expect(card).toHaveStyle({ marginTop: '24px' });
  });

  it('forwards native, data, and aria props', () => {
    render(
      <Card
        id="card-id"
        title="Structured content"
        aria-label="Queue health card"
        data-testid="card"
        data-card="structured"
      >
        Content
      </Card>
    );

    const card = screen.getByTestId('card');

    expect(card).toHaveAttribute('id', 'card-id');
    expect(card).toHaveAttribute('title', 'Structured content');
    expect(card).toHaveAttribute('aria-label', 'Queue health card');
    expect(card).toHaveAttribute('data-card', 'structured');
  });

  it('forwards native event handlers', () => {
    const handleClick = vi.fn();

    render(
      <Card data-testid="card" onClick={handleClick}>
        Clickable content only when consumers choose it
      </Card>
    );

    fireEvent.click(screen.getByTestId('card'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies containment through Surface plus default padding', () => {
    render(<Card data-testid="card">Contained</Card>);

    const card = screen.getByTestId('card');

    expect(card).toHaveStyle(`background-color: ${semanticColors.dark.surface}`);
    expect(card).toHaveStyle(`padding: ${space[4]}`);
  });

  it('does not add implicit role or tabIndex', () => {
    render(<Card data-testid="card">Neutral card</Card>);

    const card = screen.getByTestId('card');

    expect(card).not.toHaveAttribute('role');
    expect(card).not.toHaveAttribute('tabindex');
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('keeps interactive descendants functional', () => {
    const handleClick = vi.fn();

    render(
      <Card>
        <button type="button" onClick={handleClick}>
          Open runbook
        </button>
      </Card>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open runbook' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
