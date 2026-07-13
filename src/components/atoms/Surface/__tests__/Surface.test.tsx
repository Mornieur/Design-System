import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { radiusRoles, semanticColors } from '@/design-tokens';
import Surface from '..';

describe('Surface', () => {
  it('renders children', () => {
    render(<Surface>Containment</Surface>);

    expect(screen.getByText('Containment')).toBeInTheDocument();
  });

  it('forwards ref to the native div', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Surface ref={ref}>Surface ref</Surface>);

    expect(ref.current).toBe(screen.getByText('Surface ref'));
  });

  it('passes className and style to the native div', () => {
    render(
      <Surface className="custom-surface" style={{ padding: 24 }}>
        Styled
      </Surface>
    );

    const surface = screen.getByText('Styled');

    expect(surface).toHaveClass('custom-surface');
    expect(surface).toHaveStyle({ padding: '24px' });
  });

  it('forwards native, data, and aria props', () => {
    render(
      <Surface
        id="surface-id"
        title="Grouped content"
        aria-label="Operational surface"
        data-testid="surface"
        data-surface="group"
      >
        Content
      </Surface>
    );

    const surface = screen.getByTestId('surface');

    expect(surface).toHaveAttribute('id', 'surface-id');
    expect(surface).toHaveAttribute('title', 'Grouped content');
    expect(surface).toHaveAttribute('aria-label', 'Operational surface');
    expect(surface).toHaveAttribute('data-surface', 'group');
  });

  it('applies the default surface treatment', () => {
    render(<Surface data-testid="surface">Default</Surface>);

    const surface = screen.getByTestId('surface');

    expect(surface).toHaveStyle(`background-color: ${semanticColors.dark.surface}`);
    expect(surface).toHaveStyle(`border-radius: ${radiusRoles.surface}`);
    expect(surface).toHaveStyle(`border-color: ${semanticColors.dark.border}`);
  });

  it('supports the secondary surface treatment', () => {
    render(
      <Surface variant="secondary" data-testid="surface">
        Secondary
      </Surface>
    );

    expect(screen.getByTestId('surface')).toHaveStyle(
      `background-color: ${semanticColors.dark.backgroundAlt}`
    );
  });

  it('does not leak internal props to the DOM', () => {
    render(
      <Surface variant="secondary" data-testid="surface">
        No leak
      </Surface>
    );

    const surface = screen.getByTestId('surface');

    expect(surface).not.toHaveAttribute('variant');
  });

  it('does not add implicit landmark roles or tabIndex', () => {
    render(<Surface data-testid="surface">Neutral</Surface>);

    const surface = screen.getByTestId('surface');

    expect(surface).not.toHaveAttribute('role');
    expect(surface).not.toHaveAttribute('tabindex');
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });
});
