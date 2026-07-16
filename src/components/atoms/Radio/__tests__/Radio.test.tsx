import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef, type FormEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Radio from '..';

describe('Radio', () => {
  it('renders a native radio input', () => {
    render(<Radio aria-label="Email channel" />);

    expect(screen.getByRole('radio', { name: 'Email channel' })).toBeInTheDocument();
  });

  it('associates label with the radio', () => {
    render(<Radio label="Weekly digest" />);

    expect(screen.getByLabelText('Weekly digest')).toHaveAttribute('type', 'radio');
  });

  it('generates an id when none is provided', () => {
    render(<Radio label="Generated id" />);

    const radio = screen.getByLabelText('Generated id');

    expect(radio).toHaveAttribute('id');
    expect(radio.getAttribute('id')).toMatch(/^feitoza-radio-/);
  });

  it('forwards ref to the native radio', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Radio ref={ref} label="Ref radio" />);

    expect(ref.current).toBe(screen.getByLabelText('Ref radio'));
  });

  it('passes className and style to the root element', () => {
    const { container } = render(
      <Radio className="custom-radio" style={{ width: 240 }} label="Styled radio" />
    );

    expect(container.firstChild).toHaveClass('custom-radio');
    expect(container.firstChild).toHaveStyle({ width: '240px' });
  });

  it('passes native radio props to the input element', () => {
    render(
      <Radio
        id="contact-email"
        name="contactChannel"
        value="email"
        form="preferences-form"
        required
        defaultChecked
        label="Email"
      />
    );

    const radio = screen.getByLabelText(/Email/);

    expect(radio).toHaveAttribute('id', 'contact-email');
    expect(radio).toHaveAttribute('name', 'contactChannel');
    expect(radio).toHaveAttribute('value', 'email');
    expect(radio).toHaveAttribute('form', 'preferences-form');
    expect(radio).toBeRequired();
    expect(radio).toBeChecked();
  });

  it('supports controlled checked state', () => {
    const { rerender } = render(<Radio label="Controlled" checked={false} onChange={() => undefined} />);

    expect(screen.getByLabelText('Controlled')).not.toBeChecked();

    rerender(<Radio label="Controlled" checked onChange={() => undefined} />);

    expect(screen.getByLabelText('Controlled')).toBeChecked();
  });

  it('supports defaultChecked state', () => {
    render(<Radio label="Default checked" defaultChecked />);

    expect(screen.getByLabelText('Default checked')).toBeChecked();
  });

  it('calls onChange when the checked state changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <>
        <Radio name="channel" value="email" label="Email" onChange={handleChange} />
        <Radio name="channel" value="slack" label="Slack" />
      </>
    );

    await user.click(screen.getByLabelText('Email'));

    expect(handleChange).toHaveBeenCalledOnce();
  });

  it('preserves native exclusivity for radios that share the same name and submits only the selected value', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => event.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Radio name="contactChannel" value="email" label="Email channel" defaultChecked />
        <Radio name="contactChannel" value="slack" label="Slack channel" />
        <Radio name="contactChannel" value="pager" label="Pager channel" />
        <button type="submit">Submit exclusive choice</button>
      </form>
    );

    const emailRadio = screen.getByLabelText('Email channel');
    const slackRadio = screen.getByLabelText('Slack channel');

    expect(emailRadio).toBeChecked();
    expect(slackRadio).not.toBeChecked();

    await user.click(slackRadio);

    expect(slackRadio).toBeChecked();
    expect(emailRadio).not.toBeChecked();

    slackRadio.focus();
    await user.keyboard('[Space]');

    expect(slackRadio).toHaveFocus();
    expect(slackRadio).toBeChecked();

    await user.click(screen.getByRole('button', { name: 'Submit exclusive choice' }));

    expect(handleSubmit).toHaveBeenCalledOnce();

    const form = screen
      .getByRole('button', { name: 'Submit exclusive choice' })
      .closest('form');
    const formData = new FormData(form as HTMLFormElement);

    expect(formData.get('contactChannel')).toBe('slack');
  });

  it('supports disabled state', () => {
    render(<Radio label="Disabled radio" disabled />);

    expect(screen.getByLabelText('Disabled radio')).toBeDisabled();
  });

  it('supports keyboard selection with Space', async () => {
    const user = userEvent.setup();

    render(<Radio label="Keyboard select" name="keyboardChannel" value="email" />);

    const radio = screen.getByLabelText('Keyboard select');

    radio.focus();
    await user.keyboard('[Space]');

    expect(radio).toBeChecked();
  });

  it('receives focus on the native input', () => {
    render(<Radio label="Focusable radio" />);

    const radio = screen.getByLabelText('Focusable radio');

    radio.focus();

    expect(radio).toHaveFocus();
  });

  it('associates helper text through aria-describedby', () => {
    render(
      <Radio
        label="Slack updates"
        helperText="Use Slack for fast release coordination with the team."
      />
    );

    expect(screen.getByLabelText('Slack updates')).toHaveAccessibleDescription(
      'Use Slack for fast release coordination with the team.'
    );
  });

  it('associates error text and marks the radio invalid', () => {
    render(<Radio label="Production path" errorMessage="Choose the release path." />);

    const radio = screen.getByLabelText('Production path');

    expect(radio).toHaveAttribute('aria-invalid', 'true');
    expect(radio).toHaveAccessibleDescription('Choose the release path.');
  });

  it('keeps helper text associated when error text is present', () => {
    render(
      <Radio
        label="Approval channel"
        helperText="Used for formal release authorization."
        errorMessage="Select one approval route before continuing."
      />
    );

    expect(screen.getByLabelText('Approval channel')).toHaveAccessibleDescription(
      'Used for formal release authorization. Select one approval route before continuing.'
    );
  });

  it('uses invalid prop without requiring an error message', () => {
    render(<Radio label="Invalid radio" invalid />);

    expect(screen.getByLabelText('Invalid radio')).toHaveAttribute('aria-invalid', 'true');
  });

  it('preserves user supplied aria-invalid when not invalid internally', () => {
    render(<Radio label="External invalid" aria-invalid="grammar" />);

    expect(screen.getByLabelText('External invalid')).toHaveAttribute('aria-invalid', 'grammar');
  });

  it('preserves user supplied aria-describedby with helper text', () => {
    render(
      <>
        <span id="external-description">External description.</span>
        <Radio
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

  it('submits its value with native forms when checked', () => {
    const handleSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => event.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Radio label="Email" name="channel" value="email" defaultChecked />
        <Radio label="Slack" name="channel" value="slack" />
        <button type="submit">Submit</button>
      </form>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleSubmit).toHaveBeenCalledOnce();

    const form = screen.getByRole('button', { name: 'Submit' }).closest('form');
    const formData = new FormData(form as HTMLFormElement);

    expect(formData.get('channel')).toBe('email');
  });

  it('does not submit its value when unchecked', () => {
    const handleSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => event.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Radio label="Email" name="channel" value="email" />
        <button type="submit">Submit unchecked</button>
      </form>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit unchecked' }));

    expect(handleSubmit).toHaveBeenCalledOnce();

    const form = screen.getByRole('button', { name: 'Submit unchecked' }).closest('form');
    const formData = new FormData(form as HTMLFormElement);

    expect(formData.get('channel')).toBeNull();
  });

  it('resets to its default checked state through a native form reset', async () => {
    const user = userEvent.setup();

    render(
      <form>
        <Radio label="Default email channel" defaultChecked name="resetChannel" value="email" />
        <Radio label="Slack channel" name="resetChannel" value="slack" />
        <button type="reset">Reset form</button>
      </form>
    );

    const defaultRadio = screen.getByLabelText('Default email channel');
    const alternateRadio = screen.getByLabelText('Slack channel');

    await user.click(alternateRadio);
    expect(alternateRadio).toBeChecked();

    await user.click(screen.getByRole('button', { name: 'Reset form' }));

    expect(defaultRadio).toBeChecked();
  });

  it('does not leak transient style props to the DOM', () => {
    render(<Radio label="Transient" fullWidth invalid />);

    const radio = screen.getByLabelText('Transient');

    expect(radio).not.toHaveAttribute('$invalid');
    expect(radio.parentElement).not.toHaveAttribute('$fullWidth');
  });
});
