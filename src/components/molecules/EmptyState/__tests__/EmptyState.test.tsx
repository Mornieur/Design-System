import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Button from '@/components/atoms/Button';
import EmptyState, { type EmptyStateTone } from '..';

const tones: EmptyStateTone[] = ['neutral', 'info', 'danger'];

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(<EmptyState title="No deployments" description="Create a deployment to continue." />);

    expect(screen.getByRole('heading', { name: 'No deployments' })).toBeInTheDocument();
    expect(screen.getByText('Create a deployment to continue.')).toBeInTheDocument();
  });

  it('renders actions', () => {
    render(
      <EmptyState
        title="No deployments"
        action={<Button>Create</Button>}
        secondaryAction={<Button variant="secondary">Import</Button>}
      />
    );

    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Import' })).toBeInTheDocument();
  });

  it('renders a custom decorative icon', () => {
    render(<EmptyState title="Custom icon" icon={<svg data-testid="custom-icon" />} />);

    expect(screen.getByTestId('custom-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it.each(tones)('supports %s tone without leaking transient props', (tone) => {
    render(<EmptyState title={tone} tone={tone} />);

    expect(screen.getByRole('heading', { name: tone }).parentElement).not.toHaveAttribute('$tone');
  });

  it('forwards HTML props, className, style, data attributes, and ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <EmptyState
        ref={ref}
        className="custom-empty"
        data-state="empty"
        style={{ opacity: 0.7 }}
        title="Forwarded"
      />
    );

    const root = screen.getByRole('heading', { name: 'Forwarded' }).parentElement;

    expect(root).toHaveClass('custom-empty');
    expect(root).toHaveAttribute('data-state', 'empty');
    expect(root).toHaveStyle({ opacity: '0.7' });
    expect(ref.current).toBe(root);
  });
});
