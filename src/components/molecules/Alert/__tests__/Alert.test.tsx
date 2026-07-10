import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Alert, { type AlertVariant } from '..';

const variants: AlertVariant[] = ['neutral', 'info', 'success', 'warning', 'danger'];

describe('Alert', () => {
  it('renders title and description', () => {
    render(<Alert title="Deploy queued">The release is waiting for approval.</Alert>);

    expect(screen.getByText('Deploy queued')).toBeInTheDocument();
    expect(screen.getByText('The release is waiting for approval.')).toBeInTheDocument();
  });

  it('uses status semantics for non-danger variants', () => {
    render(<Alert title="Info">Message</Alert>);

    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
  });

  it('uses alert semantics for danger by default', () => {
    render(
      <Alert variant="danger" title="Incident">
        Error rate is above threshold.
      </Alert>
    );

    expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
  });

  it('allows role and aria-live overrides', () => {
    render(
      <Alert role="note" aria-live="off" title="Static note">
        No announcement.
      </Alert>
    );

    expect(screen.getByRole('note')).toHaveAttribute('aria-live', 'off');
  });

  it.each(variants)('renders %s variant without leaking transient props', (variant) => {
    render(
      <Alert variant={variant} title={variant}>
        Message
      </Alert>
    );

    expect(screen.getByText(variant).closest('[role]')).not.toHaveAttribute('$variant');
  });

  it('renders a custom decorative icon', () => {
    render(
      <Alert icon={<svg data-testid="custom-icon" />} title="Custom">
        Message
      </Alert>
    );

    expect(screen.getByTestId('custom-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('forwards HTML props, className, style, data attributes, and ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Alert
        ref={ref}
        className="custom-alert"
        data-state="open"
        style={{ opacity: 0.8 }}
        title="Forwarded"
      >
        Message
      </Alert>
    );

    const alert = screen.getByRole('status');

    expect(alert).toHaveClass('custom-alert');
    expect(alert).toHaveAttribute('data-state', 'open');
    expect(alert).toHaveStyle({ opacity: '0.8' });
    expect(ref.current).toBe(alert);
  });
});
