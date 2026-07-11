import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Badge, { type BadgeSize, type BadgeVariant } from '..';

const variants: BadgeVariant[] = ['neutral', 'primary', 'success', 'warning', 'danger', 'info'];
const sizes: BadgeSize[] = ['sm', 'md'];

describe('Badge', () => {
  it('renders a span element', () => {
    render(<Badge>Status</Badge>);

    expect(screen.getByText('Status').tagName).toBe('SPAN');
  });

  it('renders children', () => {
    render(<Badge>Operational</Badge>);

    expect(screen.getByText('Operational')).toBeInTheDocument();
  });

  it.each(variants)('renders the %s variant', (variant) => {
    render(<Badge variant={variant}>{variant}</Badge>);

    expect(screen.getByText(variant)).toBeInTheDocument();
  });

  it.each(sizes)('renders the %s size without leaking transient props', (size) => {
    render(<Badge size={size}>{size}</Badge>);

    const badge = screen.getByText(size);

    expect(badge).toBeInTheDocument();
    expect(badge).not.toHaveAttribute('$size');
  });

  it('supports outlined without leaking the prop to the DOM', () => {
    render(<Badge outlined>Outlined</Badge>);

    expect(screen.getByText('Outlined')).not.toHaveAttribute('outlined');
    expect(screen.getByText('Outlined')).not.toHaveAttribute('$outlined');
  });

  it('forwards HTML props to the span', () => {
    render(
      <Badge id="release-badge" title="Release channel" aria-label="Current release channel">
        stable
      </Badge>
    );

    const badge = screen.getByLabelText('Current release channel');

    expect(badge).toHaveAttribute('id', 'release-badge');
    expect(badge).toHaveAttribute('title', 'Release channel');
  });

  it('passes className and style to the span', () => {
    render(
      <Badge className="custom-badge" style={{ marginInlineStart: 8 }}>
        Styled
      </Badge>
    );

    const badge = screen.getByText('Styled');

    expect(badge).toHaveClass('custom-badge');
    expect(badge).toHaveStyle({ marginInlineStart: '8px' });
  });

  it('forwards ref to the span', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Badge ref={ref}>Ref badge</Badge>);

    expect(ref.current).toBe(screen.getByText('Ref badge'));
  });

  it('forwards custom data attributes', () => {
    render(<Badge data-state="active">Active</Badge>);

    expect(screen.getByText('Active')).toHaveAttribute('data-state', 'active');
  });

  it('does not add interactive semantics by default', () => {
    render(<Badge>Status only</Badge>);

    const badge = screen.getByText('Status only');

    expect(badge).not.toHaveAttribute('role');
    expect(badge).not.toHaveAttribute('tabindex');
  });

  it('does not leak variant transient props to the DOM', () => {
    render(<Badge variant="success">Transient</Badge>);

    expect(screen.getByText('Transient')).not.toHaveAttribute('$variant');
  });
});
