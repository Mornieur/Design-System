import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import VisuallyHidden from '..';

describe('VisuallyHidden', () => {
  it('renders content in the accessibility tree', () => {
    render(
      <button type="button">
        <svg aria-hidden="true" />
        <VisuallyHidden>Close panel</VisuallyHidden>
      </button>
    );

    expect(screen.getByRole('button', { name: 'Close panel' })).toBeInTheDocument();
  });

  it('forwards ref, className, style, and html attributes to the span', () => {
    const ref = createRef<HTMLSpanElement>();

    render(
      <VisuallyHidden
        ref={ref}
        className="visually-hidden-text"
        style={{ top: 0 }}
        data-slot="assistive-label"
      >
        Hidden label
      </VisuallyHidden>
    );

    const element = screen.getByText('Hidden label');

    expect(ref.current).toBe(element);
    expect(element).toHaveClass('visually-hidden-text');
    expect(element).toHaveStyle({ top: '0px' });
    expect(element).toHaveAttribute('data-slot', 'assistive-label');
  });

  it('applies the expected visually hidden clipping styles', () => {
    render(<VisuallyHidden>Hidden helper</VisuallyHidden>);

    const element = screen.getByText('Hidden helper');
    const styles = window.getComputedStyle(element);

    expect(styles.position).toBe('absolute');
    expect(styles.width).toBe('1px');
    expect(styles.height).toBe('1px');
    expect(styles.overflow).toBe('hidden');
    expect(styles.clip).toMatch(/^rect\(0(px)?, 0(px)?, 0(px)?, 0(px)?\)$/);
    expect(styles.whiteSpace).toBe('nowrap');
  });
});
