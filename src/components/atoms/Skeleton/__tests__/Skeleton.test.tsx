import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Skeleton, { type SkeletonRadius } from '..';

const radii: SkeletonRadius[] = ['none', 'sm', 'md', 'pill'];

describe('Skeleton', () => {
  it('renders a decorative loading placeholder', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
  });

  it.each(radii)('supports %s radius without leaking transient props', (radius) => {
    render(<Skeleton data-testid={radius} radius={radius} />);

    expect(screen.getByTestId(radius)).not.toHaveAttribute('$radius');
  });

  it('supports width and height through style', () => {
    render(<Skeleton data-testid="skeleton" width={120} height="24px" />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '120px', height: '24px' });
  });

  it('supports disabled animation without leaking transient props', () => {
    render(<Skeleton animated={false} data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).not.toHaveAttribute('animated');
    expect(screen.getByTestId('skeleton')).not.toHaveAttribute('$animated');
  });

  it('forwards HTML props, className, style, data attributes, and ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Skeleton
        ref={ref}
        className="custom-skeleton"
        data-state="loading"
        data-testid="skeleton"
        style={{ opacity: 0.5 }}
      />
    );

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveClass('custom-skeleton');
    expect(skeleton).toHaveAttribute('data-state', 'loading');
    expect(skeleton).toHaveStyle({ opacity: '0.5' });
    expect(ref.current).toBe(skeleton);
  });
});
