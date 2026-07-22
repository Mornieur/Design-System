import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Input from '..';

describe('Input', () => {
  it('renders a native input with placeholder', () => {
    render(<Input placeholder="Project name" />);

    expect(screen.getByPlaceholderText('Project name')).toBeInTheDocument();
  });

  it('associates label with the input', () => {
    render(<Input label="Email" type="email" />);

    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
  });

  it('generates an id when none is provided', () => {
    render(<Input label="Generated id" />);

    const input = screen.getByLabelText('Generated id');

    expect(input).toHaveAttribute('id');
    expect(input.getAttribute('id')).toMatch(/^feitoza-input-/);
  });

  it('forwards ref to the native input', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} label="Ref input" />);

    expect(ref.current).toBe(screen.getByLabelText('Ref input'));
  });

  it('passes className and style to the root element', () => {
    const { container } = render(
      <Input className="custom-input" style={{ width: 240 }} label="Styled input" />
    );

    expect(container.firstChild).toHaveClass('custom-input');
    expect(container.firstChild).toHaveStyle({ width: '240px' });
  });

  it('passes native input props to the input element', () => {
    render(
      <Input
        id="service-id"
        name="service"
        type="search"
        inputMode="search"
        autoComplete="off"
        required
        defaultValue="api"
      />
    );

    const input = screen.getByDisplayValue('api');

    expect(input).toHaveAttribute('id', 'service-id');
    expect(input).toHaveAttribute('name', 'service');
    expect(input).toHaveAttribute('type', 'search');
    expect(input).toHaveAttribute('inputmode', 'search');
    expect(input).toHaveAttribute('autocomplete', 'off');
    expect(input).toBeRequired();
  });

  it('keeps an explicit id on the native input instead of duplicating it on the wrapper', () => {
    const { container } = render(<Input id="service-id" label="Service id" />);

    expect(screen.getByLabelText('Service id')).toHaveAttribute('id', 'service-id');
    expect(container.firstChild).not.toHaveAttribute('id', 'service-id');
  });

  it('calls onChange when the value changes', () => {
    const handleChange = vi.fn();

    render(<Input label="Name" onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Maria' } });

    expect(handleChange).toHaveBeenCalledOnce();
  });

  it('supports disabled state', () => {
    render(<Input label="Disabled field" disabled />);

    expect(screen.getByLabelText('Disabled field')).toBeDisabled();
  });

  it('supports readOnly state', () => {
    render(<Input label="Read only field" readOnly defaultValue="Locked" />);

    expect(screen.getByLabelText('Read only field')).toHaveAttribute('readonly');
  });

  it('can receive focus', () => {
    render(<Input label="Focusable field" />);

    const input = screen.getByLabelText('Focusable field');

    input.focus();

    expect(input).toHaveFocus();
  });

  it('focuses the input when the control container is pressed', async () => {
    const user = userEvent.setup();
    render(<Input label="Container focus" startIcon={<svg />} />);

    const input = screen.getByLabelText('Container focus');
    const control = input.parentElement;

    expect(control).not.toBeNull();

    await user.pointer({ keys: '[MouseLeft]', target: control! });

    expect(input).toHaveFocus();
  });

  it('preserves native keyboard input behavior', async () => {
    const user = userEvent.setup();

    render(<Input label="Keyboard field" />);

    const input = screen.getByLabelText('Keyboard field');

    await user.click(input);
    await user.keyboard('abc');

    expect(input).toHaveValue('abc');
  });

  it('associates helper text through aria-describedby', () => {
    render(<Input label="Region" helperText="Use a provider region code." />);

    expect(screen.getByLabelText('Region')).toHaveAccessibleDescription(
      'Use a provider region code.'
    );
  });

  it('associates error text and marks the input invalid', () => {
    render(<Input label="Slug" errorMessage="Only lowercase letters are allowed." />);

    const input = screen.getByLabelText('Slug');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Only lowercase letters are allowed.');
  });

  it('keeps helper text associated when error text is present', () => {
    render(
      <Input
        label="Slug with helper"
        helperText="Use the public workspace slug."
        errorMessage="Only lowercase letters are allowed."
      />
    );

    expect(screen.getByLabelText('Slug with helper')).toHaveAccessibleDescription(
      'Use the public workspace slug. Only lowercase letters are allowed.'
    );
  });

  it('uses invalid prop without requiring an error message', () => {
    render(<Input label="Invalid field" invalid />);

    expect(screen.getByLabelText('Invalid field')).toHaveAttribute('aria-invalid', 'true');
  });

  it('keeps helper text associated when invalid is true without an error message', () => {
    render(<Input label="Invalid with helper" invalid helperText="Review this value." />);

    const input = screen.getByLabelText('Invalid with helper');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Review this value.');
  });

  it('preserves user supplied aria-describedby with helper text', () => {
    render(
      <>
        <span id="external-description">External description.</span>
        <Input
          label="With external description"
          aria-describedby="external-description"
          helperText="Internal helper."
        />
      </>
    );

    const input = screen.getByLabelText('With external description');

    expect(input).toHaveAccessibleDescription('External description. Internal helper.');
  });

  it('renders start and end icons as decorative slots', () => {
    render(
      <Input
        label="Icons"
        startIcon={<svg data-testid="start-icon" />}
        endIcon={<svg data-testid="end-icon" />}
      />
    );

    expect(screen.getByTestId('start-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('end-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not leak transient style props to the DOM', () => {
    render(<Input label="Transient" fullWidth invalid size="lg" />);

    const input = screen.getByLabelText('Transient');

    expect(input).not.toHaveAttribute('$size');
    expect(input).not.toHaveAttribute('$invalid');
    expect(input.parentElement).not.toHaveAttribute('$fullWidth');
    expect(input.parentElement).not.toHaveAttribute('$readOnly');
  });
});
