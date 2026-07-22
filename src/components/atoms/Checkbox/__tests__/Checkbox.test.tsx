import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef, type FormEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Checkbox from '..';

describe('Checkbox', () => {
  it('renders a native checkbox input', () => {
    render(<Checkbox aria-label="Accept terms" />);

    expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument();
  });

  it('associates label with the checkbox', () => {
    render(<Checkbox label="Email me about releases" />);

    expect(screen.getByLabelText('Email me about releases')).toHaveAttribute('type', 'checkbox');
  });

  it('generates an id when none is provided', () => {
    render(<Checkbox label="Generated id" />);

    const checkbox = screen.getByLabelText('Generated id');

    expect(checkbox).toHaveAttribute('id');
    expect(checkbox.getAttribute('id')).toMatch(/^feitoza-checkbox-/);
  });

  it('forwards ref to the native checkbox', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="Ref checkbox" />);

    expect(ref.current).toBe(screen.getByLabelText('Ref checkbox'));
  });

  it('passes className and style to the root element', () => {
    const { container } = render(
      <Checkbox className="custom-checkbox" style={{ width: 240 }} label="Styled checkbox" />
    );

    expect(container.firstChild).toHaveClass('custom-checkbox');
    expect(container.firstChild).toHaveStyle({ width: '240px' });
  });

  it('passes native checkbox props to the input element', () => {
    render(
      <Checkbox
        id="release-opt-in"
        name="releaseOptIn"
        value="yes"
        form="preferences-form"
        required
        defaultChecked
        label="Release notes"
      />
    );

    const checkbox = screen.getByLabelText(/Release notes/);

    expect(checkbox).toHaveAttribute('id', 'release-opt-in');
    expect(checkbox).toHaveAttribute('name', 'releaseOptIn');
    expect(checkbox).toHaveAttribute('value', 'yes');
    expect(checkbox).toHaveAttribute('form', 'preferences-form');
    expect(checkbox).toBeRequired();
    expect(checkbox).toBeChecked();
  });

  it('supports controlled checked state', () => {
    const { rerender } = render(
      <Checkbox label="Controlled" checked={false} onChange={() => undefined} />
    );

    expect(screen.getByLabelText('Controlled')).not.toBeChecked();

    rerender(<Checkbox label="Controlled" checked onChange={() => undefined} />);

    expect(screen.getByLabelText('Controlled')).toBeChecked();
  });

  it('calls onChange when the checked state changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox label="Notifications" onChange={handleChange} />);

    await user.click(screen.getByLabelText('Notifications'));

    expect(handleChange).toHaveBeenCalledOnce();
  });

  it('supports disabled state', () => {
    render(<Checkbox label="Disabled checkbox" disabled />);

    expect(screen.getByLabelText('Disabled checkbox')).toBeDisabled();
  });

  it('supports keyboard toggle with Space', async () => {
    const user = userEvent.setup();

    render(<Checkbox label="Keyboard toggle" />);

    const checkbox = screen.getByLabelText('Keyboard toggle');

    checkbox.focus();
    await user.keyboard('[Space]');

    expect(checkbox).toBeChecked();
  });

  it('associates helper text through aria-describedby', () => {
    render(
      <Checkbox
        label="Operational alerts"
        helperText="Send updates for incidents and deploy rollbacks."
      />
    );

    expect(screen.getByLabelText('Operational alerts')).toHaveAccessibleDescription(
      'Send updates for incidents and deploy rollbacks.'
    );
  });

  it('associates error text and marks the checkbox invalid', () => {
    render(<Checkbox label="Terms" errorMessage="You must accept the terms." />);

    const checkbox = screen.getByLabelText('Terms');

    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(checkbox).toHaveAccessibleDescription('You must accept the terms.');
  });

  it('keeps helper text associated when error text is present', () => {
    render(
      <Checkbox
        label="Security digest"
        helperText="Includes platform and identity updates."
        errorMessage="Select at least one communication channel."
      />
    );

    expect(screen.getByLabelText('Security digest')).toHaveAccessibleDescription(
      'Includes platform and identity updates. Select at least one communication channel.'
    );
  });

  it('uses invalid prop without requiring an error message', () => {
    render(<Checkbox label="Invalid checkbox" invalid />);

    expect(screen.getByLabelText('Invalid checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('preserves user supplied aria-invalid when not invalid internally', () => {
    render(<Checkbox label="External invalid" aria-invalid="grammar" />);

    expect(screen.getByLabelText('External invalid')).toHaveAttribute('aria-invalid', 'grammar');
  });

  it('preserves user supplied aria-describedby with helper text', () => {
    render(
      <>
        <span id="external-description">External description.</span>
        <Checkbox
          label="With external description"
          aria-describedby="external-description"
          helperText="Internal helper."
        />
      </>
    );

    expect(screen.getByLabelText('With external description')).toHaveAccessibleDescription(
      'External description. Internal helper.'
    );
  });

  it('sets the native indeterminate property', () => {
    const { rerender } = render(<Checkbox label="Partial selection" indeterminate />);

    const checkbox = screen.getByLabelText('Partial selection') as HTMLInputElement;

    expect(checkbox.indeterminate).toBe(true);

    rerender(<Checkbox label="Partial selection" indeterminate={false} />);

    expect(checkbox.indeterminate).toBe(false);
  });

  it('keeps the external ref in sync while indeterminate changes', () => {
    const ref = createRef<HTMLInputElement>();
    const { rerender } = render(
      <Checkbox ref={ref} label="Ref partial selection" indeterminate={false} />
    );

    expect(ref.current).toBe(screen.getByLabelText('Ref partial selection'));
    expect(ref.current?.indeterminate).toBe(false);

    rerender(<Checkbox ref={ref} label="Ref partial selection" indeterminate />);

    expect(ref.current?.indeterminate).toBe(true);
  });

  it('allows checked and indeterminate to coexist without breaking checked submission semantics', () => {
    render(<Checkbox label="Checked partial" checked indeterminate onChange={() => undefined} />);

    const checkbox = screen.getByLabelText('Checked partial') as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
    expect(checkbox.indeterminate).toBe(true);
  });

  it('submits its value with native forms when checked', () => {
    const handleSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => event.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Checkbox label="Product updates" name="updates" value="product" defaultChecked />
        <button type="submit">Submit</button>
      </form>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleSubmit).toHaveBeenCalledOnce();

    const form = screen.getByRole('button', { name: 'Submit' }).closest('form');
    const formData = new FormData(form as HTMLFormElement);

    expect(formData.get('updates')).toBe('product');
  });

  it('does not submit its value when unchecked', () => {
    const handleSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => event.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Checkbox label="Digest updates" name="digest" value="weekly" />
        <button type="submit">Submit unchecked</button>
      </form>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit unchecked' }));

    expect(handleSubmit).toHaveBeenCalledOnce();

    const form = screen.getByRole('button', { name: 'Submit unchecked' }).closest('form');
    const formData = new FormData(form as HTMLFormElement);

    expect(formData.get('digest')).toBeNull();
  });

  it('resets to its default checked state through a native form reset', async () => {
    const user = userEvent.setup();

    render(
      <form>
        <Checkbox label="Reset notifications" defaultChecked name="resetNotifications" />
        <button type="reset">Reset form</button>
      </form>
    );

    const checkbox = screen.getByLabelText('Reset notifications');

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();

    await user.click(screen.getByRole('button', { name: 'Reset form' }));

    expect(checkbox).toBeChecked();
  });

  it('does not leak transient style props to the DOM', () => {
    render(<Checkbox label="Transient" fullWidth invalid indeterminate />);

    const checkbox = screen.getByLabelText('Transient');

    expect(checkbox).not.toHaveAttribute('$invalid');
    expect(checkbox.parentElement).not.toHaveAttribute('$fullWidth');
  });
});
