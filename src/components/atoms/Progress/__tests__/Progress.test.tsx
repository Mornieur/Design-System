import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Progress, { type ProgressSize, type ProgressTone } from '..';

const tones: ProgressTone[] = ['primary', 'success', 'warning', 'danger', 'info'];
const sizes: ProgressSize[] = ['sm', 'md'];

describe('Progress', () => {
  it('renders an accessible progressbar', () => {
    render(<Progress label="Deploy progress" value={48} />);

    const progress = screen.getByRole('progressbar', { name: 'Deploy progress' });

    expect(progress).toHaveAttribute('aria-valuenow', '48');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('uses a default accessible name when no label is provided', () => {
    render(<Progress value={48} />);

    expect(screen.getByRole('progressbar', { name: 'Progress' })).toHaveAttribute(
      'aria-valuenow',
      '48'
    );
  });

  it('clamps values to the configured range', () => {
    render(<Progress label="Clamped" max={10} value={24} />);

    expect(screen.getByRole('progressbar', { name: 'Clamped' })).toHaveAttribute(
      'aria-valuenow',
      '10'
    );
  });

  it('supports indeterminate progress', () => {
    render(<Progress label="Indeterminate" />);

    expect(screen.getByRole('progressbar', { name: 'Indeterminate' })).not.toHaveAttribute(
      'aria-valuenow'
    );
  });

  it.each(tones)('supports %s tone without leaking transient props', (tone) => {
    render(<Progress label={tone} tone={tone} value={50} />);

    expect(screen.getByRole('progressbar', { name: tone }).firstChild).not.toHaveAttribute('$tone');
  });

  it.each(sizes)('supports %s size without leaking transient props', (size) => {
    render(<Progress label={size} size={size} value={50} />);

    expect(screen.getByRole('progressbar', { name: size })).not.toHaveAttribute('$size');
  });

  it('forwards HTML props, className, style, data attributes, and ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Progress
        ref={ref}
        className="custom-progress"
        data-state="loading"
        label="Forwarded"
        style={{ opacity: 0.75 }}
        value={20}
      />
    );

    const progress = screen.getByRole('progressbar', { name: 'Forwarded' });

    expect(progress).toHaveClass('custom-progress');
    expect(progress).toHaveAttribute('data-state', 'loading');
    expect(progress).toHaveStyle({ opacity: '0.75' });
    expect(ref.current).toBe(progress);
  });
});
