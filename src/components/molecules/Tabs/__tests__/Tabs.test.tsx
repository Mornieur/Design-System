import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Tabs from '..';

const Example = ({ onValueChange }: { onValueChange?: (value: string) => void }) => (
  <Tabs.Root defaultValue="overview" onValueChange={onValueChange}>
    <Tabs.List aria-label="Service sections">
      <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
      <Tabs.Trigger value="metrics">Metrics</Tabs.Trigger>
      <Tabs.Trigger value="logs">Logs</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="overview">Overview content</Tabs.Content>
    <Tabs.Content value="metrics">Metrics content</Tabs.Content>
    <Tabs.Content value="logs">Logs content</Tabs.Content>
  </Tabs.Root>
);

describe('Tabs', () => {
  it('renders accessible tablist, tabs, and selected content', () => {
    render(<Example />);

    expect(screen.getByRole('tablist', { name: 'Service sections' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Overview content')).toBeVisible();
    expect(screen.getByText('Metrics content')).not.toBeVisible();
  });

  it('switches selected tab on click', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Example onValueChange={handleChange} />);

    await user.click(screen.getByRole('tab', { name: 'Metrics' }));

    expect(screen.getByRole('tab', { name: 'Metrics' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Metrics content')).toBeVisible();
    expect(handleChange).toHaveBeenCalledWith('metrics');
  });

  it('supports controlled value', () => {
    const { rerender } = render(
      <Tabs.Root value="overview" onValueChange={() => undefined}>
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="logs">Logs</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">Overview content</Tabs.Content>
        <Tabs.Content value="logs">Logs content</Tabs.Content>
      </Tabs.Root>
    );

    expect(screen.getByText('Overview content')).toBeVisible();

    rerender(
      <Tabs.Root value="logs" onValueChange={() => undefined}>
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="logs">Logs</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">Overview content</Tabs.Content>
        <Tabs.Content value="logs">Logs content</Tabs.Content>
      </Tabs.Root>
    );

    expect(screen.getByText('Logs content')).toBeVisible();
  });

  it('supports keyboard navigation', () => {
    render(<Example />);

    const overview = screen.getByRole('tab', { name: 'Overview' });

    overview.focus();
    fireEvent.keyDown(overview, { key: 'ArrowRight' });

    expect(screen.getByRole('tab', { name: 'Metrics' })).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'Metrics' })).toHaveAttribute('aria-selected', 'true');
  });

  it('supports Home and End keyboard navigation', () => {
    render(<Example />);

    const overview = screen.getByRole('tab', { name: 'Overview' });
    const metrics = screen.getByRole('tab', { name: 'Metrics' });
    const logs = screen.getByRole('tab', { name: 'Logs' });

    overview.focus();
    fireEvent.keyDown(overview, { key: 'End' });

    expect(logs).toHaveFocus();
    expect(logs).toHaveAttribute('aria-selected', 'true');

    fireEvent.keyDown(logs, { key: 'Home' });

    expect(metrics).not.toHaveFocus();
    expect(overview).toHaveFocus();
    expect(overview).toHaveAttribute('aria-selected', 'true');
  });

  it('skips disabled tabs in keyboard navigation', () => {
    render(
      <Tabs.Root defaultValue="one">
        <Tabs.List>
          <Tabs.Trigger value="one">One</Tabs.Trigger>
          <Tabs.Trigger value="two" disabled>
            Two
          </Tabs.Trigger>
          <Tabs.Trigger value="three">Three</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">One content</Tabs.Content>
        <Tabs.Content value="two">Two content</Tabs.Content>
        <Tabs.Content value="three">Three content</Tabs.Content>
      </Tabs.Root>
    );

    const one = screen.getByRole('tab', { name: 'One' });

    one.focus();
    fireEvent.keyDown(one, { key: 'ArrowRight' });

    expect(screen.getByRole('tab', { name: 'Three' })).toHaveFocus();
  });

  it('forwards refs and HTML props', () => {
    const rootRef = createRef<HTMLDivElement>();
    const triggerRef = createRef<HTMLButtonElement>();

    render(
      <Tabs.Root ref={rootRef} defaultValue="one" className="custom-tabs" data-state="ready">
        <Tabs.List>
          <Tabs.Trigger ref={triggerRef} value="one" style={{ opacity: 0.9 }}>
            One
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">One content</Tabs.Content>
      </Tabs.Root>
    );

    expect(rootRef.current).toHaveClass('custom-tabs');
    expect(rootRef.current).toHaveAttribute('data-state', 'ready');
    expect(triggerRef.current).toBe(screen.getByRole('tab', { name: 'One' }));
    expect(triggerRef.current).toHaveStyle({ opacity: '0.9' });
  });

  it('keeps only the selected panel visible', async () => {
    const user = userEvent.setup();

    render(<Example />);

    expect(screen.getByText('Overview content')).toBeVisible();
    expect(screen.getByText('Metrics content')).not.toBeVisible();

    await user.click(screen.getByRole('tab', { name: 'Metrics' }));

    expect(screen.getByText('Overview content')).not.toBeVisible();
    expect(screen.getByText('Metrics content')).toBeVisible();
  });

  it('throws when compound parts are used outside root', () => {
    expect(() => render(<Tabs.Trigger value="orphan">Orphan</Tabs.Trigger>)).toThrow(
      'Tabs components must be used within <Tabs.Root>.'
    );
  });
});
