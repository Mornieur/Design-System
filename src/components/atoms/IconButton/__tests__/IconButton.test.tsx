import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import IconButton, { type IconButtonProps } from '..';

// @ts-expect-error -- IconButton requires an explicit aria-label.
const missingAriaLabel: IconButtonProps = { icon: <svg /> };
void missingAriaLabel;

const labelledByOnly: IconButtonProps = {
  'aria-label': 'Close panel',
  // @ts-expect-error -- IconButton does not accept aria-labelledby as a substitute for aria-label.
  'aria-labelledby': 'close-label',
  icon: <svg />
};
void labelledByOnly;

describe('IconButton', () => {
  it('renders an icon-only button with an explicit accessible name', () => {
    render(<IconButton aria-label="Close panel" icon={<svg data-testid="icon" />} />);

    expect(screen.getByRole('button', { name: 'Close panel' })).toBeInTheDocument();
    expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('forwards ref, className, style, and native props to the button', () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <IconButton
        ref={ref}
        aria-label="Refresh data"
        icon={<svg />}
        className="icon-button"
        style={{ marginInlineStart: 8 }}
        data-slot="refresh-trigger"
      />
    );

    const button = screen.getByRole('button', { name: 'Refresh data' });

    expect(ref.current).toBe(button);
    expect(button).toHaveClass('icon-button');
    expect(button).toHaveStyle({ marginInlineStart: '8px' });
    expect(button).toHaveAttribute('data-slot', 'refresh-trigger');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('preserves an explicit button type when provided', () => {
    render(<IconButton aria-label="Submit form" icon={<svg />} type="submit" />);

    expect(screen.getByRole('button', { name: 'Submit form' })).toHaveAttribute('type', 'submit');
  });

  it('uses loading state to disable interaction and expose busy semantics', () => {
    const handleClick = vi.fn();

    render(
      <IconButton
        aria-label="Sync environments"
        icon={<svg data-testid="sync-icon" />}
        loading
        loadingLabel="Sync in progress"
        onClick={handleClick}
      />
    );

    const button = screen.getByRole('button', { name: 'Sync environments' });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAccessibleDescription('Sync in progress');
    expect(screen.queryByTestId('sync-icon')).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('preserves external aria-describedby while loading', () => {
    render(
      <>
        <span id="external-description">External description.</span>
        <IconButton
          aria-label="Save draft"
          aria-describedby="external-description"
          icon={<svg />}
          loading
          loadingLabel="Saving draft"
        />
      </>
    );

    expect(screen.getByRole('button', { name: 'Save draft' })).toHaveAccessibleDescription(
      'External description. Saving draft'
    );
  });

  it('removes the internal loading description after leaving loading state', () => {
    const { rerender } = render(
      <IconButton aria-label="Refresh data" icon={<svg />} loading loadingLabel="Refreshing data" />
    );

    const loadingButton = screen.getByRole('button', { name: 'Refresh data' });
    const loadingDescriptionId = loadingButton.getAttribute('aria-describedby');

    expect(loadingButton).toHaveAttribute('aria-busy', 'true');
    expect(loadingDescriptionId).toBeTruthy();
    expect(document.getElementById(loadingDescriptionId!)).toHaveTextContent('Refreshing data');

    rerender(<IconButton aria-label="Refresh data" icon={<svg data-testid="refresh-icon" />} />);

    const idleButton = screen.getByRole('button', { name: 'Refresh data' });

    expect(idleButton).not.toHaveAttribute('aria-busy');
    expect(idleButton).not.toHaveAttribute('aria-describedby');
    expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
    expect(document.getElementById(loadingDescriptionId!)).not.toBeInTheDocument();
  });

  it('does not create an orphaned loading description when loadingLabel is empty', () => {
    render(<IconButton aria-label="Sync data" icon={<svg />} loading loadingLabel="" />);

    const button = screen.getByRole('button', { name: 'Sync data' });

    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).not.toHaveAttribute('aria-describedby');
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();

    render(
      <IconButton aria-label="Delete record" icon={<svg />} disabled onClick={handleClick} />
    );

    const button = screen.getByRole('button', { name: 'Delete record' });

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies square interaction dimensions without leaking transient props', () => {
    render(<IconButton aria-label="Open details" icon={<svg />} size="lg" variant="accent" />);

    const button = screen.getByRole('button', { name: 'Open details' });
    const styles = window.getComputedStyle(button);

    expect(styles.width).toBe(styles.height);
    expect(button).not.toHaveAttribute('$size');
    expect(button).not.toHaveAttribute('$variant');
  });
});
