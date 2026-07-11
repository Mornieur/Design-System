import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Divider from '..';

describe('Divider', () => {
  it('renders a native hr element', () => {
    render(<Divider />);

    expect(screen.getByRole('separator').tagName).toBe('HR');
  });

  it('defaults to horizontal orientation without adding aria-orientation', () => {
    render(<Divider />);

    expect(screen.getByRole('separator')).not.toHaveAttribute('aria-orientation');
  });

  it('supports vertical orientation', () => {
    render(<Divider orientation="vertical" />);

    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('preserves provided aria-orientation for horizontal dividers', () => {
    render(<Divider aria-orientation="horizontal" />);

    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('forwards HTML props to the hr element', () => {
    render(<Divider id="section-divider" title="Section divider" />);

    const divider = screen.getByTitle('Section divider');

    expect(divider).toHaveAttribute('id', 'section-divider');
  });

  it('passes className and style to the hr element', () => {
    render(<Divider className="custom-divider" style={{ opacity: 0.5 }} />);

    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('custom-divider');
    expect(divider).toHaveStyle({ opacity: '0.5' });
  });

  it('forwards ref to the hr element', () => {
    const ref = createRef<HTMLHRElement>();

    render(<Divider ref={ref} />);

    expect(ref.current).toBe(screen.getByRole('separator'));
  });

  it('forwards custom data attributes', () => {
    render(<Divider data-section="metadata" />);

    expect(screen.getByRole('separator')).toHaveAttribute('data-section', 'metadata');
  });

  it('supports inset without leaking transient props', () => {
    render(<Divider inset />);

    const divider = screen.getByRole('separator');

    expect(divider).toBeInTheDocument();
    expect(divider).not.toHaveAttribute('inset');
    expect(divider).not.toHaveAttribute('$inset');
  });

  it('does not leak orientation transient props to the DOM', () => {
    render(<Divider orientation="vertical" />);

    expect(screen.getByRole('separator')).not.toHaveAttribute('$orientation');
  });
});
