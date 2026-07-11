import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Spinner, { type SpinnerSize, type SpinnerTone } from '..';

const sizes: SpinnerSize[] = ['sm', 'md', 'lg'];
const tones: SpinnerTone[] = ['primary', 'neutral', 'success', 'warning', 'danger', 'info', 'inherit'];

describe('Spinner', () => {
  it('renders an accessible loading status by default', () => {
    render(<Spinner />);

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('uses a custom label', () => {
    render(<Spinner label="Loading deployments" />);

    expect(screen.getByRole('status', { name: 'Loading deployments' })).toBeInTheDocument();
  });

  it('can be decorative', () => {
    const { container } = render(<Spinner decorative />);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it.each(sizes)('renders %s size without leaking transient props', (size) => {
    render(<Spinner size={size} label={size} />);

    expect(screen.getByRole('status', { name: size })).not.toHaveAttribute('$size');
  });

  it.each(tones)('renders %s tone without leaking transient props', (tone) => {
    render(<Spinner tone={tone} label={tone} />);

    expect(screen.getByRole('status', { name: tone })).not.toHaveAttribute('$tone');
  });

  it('forwards HTML props, className, style, data attributes, and ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(
      <Spinner
        ref={ref}
        className="custom-spinner"
        data-state="loading"
        label="Fetching"
        style={{ opacity: 0.6 }}
        title="Loading indicator"
      />
    );

    const spinner = screen.getByRole('status', { name: 'Fetching' });

    expect(spinner).toHaveClass('custom-spinner');
    expect(spinner).toHaveAttribute('data-state', 'loading');
    expect(spinner).toHaveAttribute('title', 'Loading indicator');
    expect(spinner).toHaveStyle({ opacity: '0.6' });
    expect(ref.current).toBe(spinner);
  });
});
