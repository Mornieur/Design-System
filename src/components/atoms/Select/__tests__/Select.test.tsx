import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Select from '..';

const options = (
  <>
    <option value="development">Development</option>
    <option value="production">Production</option>
  </>
);

describe('Select', () => {
  it('renders a native select', () => {
    render(<Select>{options}</Select>);

    expect(screen.getByRole('combobox').tagName).toBe('SELECT');
  });

  it('renders options', () => {
    render(<Select>{options}</Select>);

    expect(screen.getByRole('option', { name: 'Development' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Production' })).toBeInTheDocument();
  });

  it('associates label with the select', () => {
    render(<Select label="Environment">{options}</Select>);

    expect(screen.getByLabelText('Environment')).toBeInTheDocument();
  });

  it('preserves a provided id', () => {
    render(
      <Select id="environment-select" label="Custom id">
        {options}
      </Select>
    );

    expect(screen.getByLabelText('Custom id')).toHaveAttribute('id', 'environment-select');
  });

  it('generates an id when none is provided', () => {
    render(<Select label="Generated id">{options}</Select>);

    const select = screen.getByLabelText('Generated id');

    expect(select).toHaveAttribute('id');
    expect(select.getAttribute('id')).toMatch(/^feitoza-select-/);
  });

  it('forwards ref to the native select', () => {
    const ref = createRef<HTMLSelectElement>();

    render(
      <Select ref={ref} label="Ref select">
        {options}
      </Select>
    );

    expect(ref.current).toBe(screen.getByLabelText('Ref select'));
  });

  it('passes className and style to the root element', () => {
    const { container } = render(
      <Select className="custom-select" style={{ width: 280 }} label="Styled select">
        {options}
      </Select>
    );

    expect(container.firstChild).toHaveClass('custom-select');
    expect(container.firstChild).toHaveStyle({ width: '280px' });
  });

  it('passes native select props to the select element', () => {
    render(
      <Select
        id="release-channel"
        name="releaseChannel"
        autoComplete="off"
        form="deploy-form"
        required
        defaultValue="production"
      >
        {options}
      </Select>
    );

    const select = screen.getByRole('combobox');

    expect(select).toHaveAttribute('id', 'release-channel');
    expect(select).toHaveAttribute('name', 'releaseChannel');
    expect(select).toHaveAttribute('autocomplete', 'off');
    expect(select).toHaveAttribute('form', 'deploy-form');
    expect(select).toBeRequired();
  });

  it('supports defaultValue', () => {
    render(<Select defaultValue="production">{options}</Select>);

    expect(screen.getByRole('combobox')).toHaveValue('production');
  });

  it('supports controlled value', () => {
    const { rerender } = render(
      <Select value="development" onChange={() => undefined}>
        {options}
      </Select>
    );

    expect(screen.getByRole('combobox')).toHaveValue('development');

    rerender(
      <Select value="production" onChange={() => undefined}>
        {options}
      </Select>
    );

    expect(screen.getByRole('combobox')).toHaveValue('production');
  });

  it('calls onChange when the selected value changes', () => {
    const handleChange = vi.fn();

    render(
      <Select label="Environment" defaultValue="development" onChange={handleChange}>
        {options}
      </Select>
    );

    fireEvent.change(screen.getByLabelText('Environment'), { target: { value: 'production' } });

    expect(handleChange).toHaveBeenCalledOnce();
  });

  it('supports required state', () => {
    render(
      <Select label="Required select" required>
        {options}
      </Select>
    );

    expect(screen.getByLabelText(/Required select/)).toBeRequired();
  });

  it('supports disabled state', () => {
    render(
      <Select label="Disabled select" disabled>
        {options}
      </Select>
    );

    expect(screen.getByLabelText('Disabled select')).toBeDisabled();
  });

  it('associates helper text through aria-describedby', () => {
    render(
      <Select label="Region" helperText="Choose the active region.">
        {options}
      </Select>
    );

    expect(screen.getByLabelText('Region')).toHaveAccessibleDescription(
      'Choose the active region.'
    );
  });

  it('associates error text and marks the select invalid', () => {
    render(
      <Select label="Policy" errorMessage="Policy is required.">
        {options}
      </Select>
    );

    const select = screen.getByLabelText('Policy');

    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAccessibleDescription('Policy is required.');
  });

  it('keeps helper text associated when error text is present', () => {
    render(
      <Select
        label="Category"
        helperText="Used for audit routing."
        errorMessage="Select a category."
      >
        {options}
      </Select>
    );

    expect(screen.getByLabelText('Category')).toHaveAccessibleDescription(
      'Used for audit routing. Select a category.'
    );
  });

  it('uses invalid prop without requiring an error message', () => {
    render(
      <Select label="Invalid select" invalid>
        {options}
      </Select>
    );

    expect(screen.getByLabelText('Invalid select')).toHaveAttribute('aria-invalid', 'true');
  });

  it('keeps helper text associated when invalid is true without an error message', () => {
    render(
      <Select label="Invalid with helper" invalid helperText="Review this selection.">
        {options}
      </Select>
    );

    const select = screen.getByLabelText('Invalid with helper');

    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAccessibleDescription('Review this selection.');
  });

  it('preserves user supplied aria-invalid when not invalid internally', () => {
    render(
      <Select label="External invalid" aria-invalid="grammar">
        {options}
      </Select>
    );

    expect(screen.getByLabelText('External invalid')).toHaveAttribute('aria-invalid', 'grammar');
  });

  it('preserves user supplied aria-describedby with helper text', () => {
    render(
      <>
        <span id="external-description">External description.</span>
        <Select
          label="With external description"
          aria-describedby="external-description"
          helperText="Internal helper."
        >
          {options}
        </Select>
      </>
    );

    expect(screen.getByLabelText('With external description')).toHaveAccessibleDescription(
      'External description. Internal helper.'
    );
  });

  it('renders placeholder option when placeholder is provided', () => {
    render(<Select label="Placeholder select" placeholder="Select an option">{options}</Select>);

    const select = screen.getByLabelText('Placeholder select');
    const placeholder = screen.getByRole('option', { name: 'Select an option' });

    expect(select).toHaveValue('');
    expect(placeholder).toBeDisabled();
  });

  it('does not duplicate a manually provided empty option when placeholder is provided', () => {
    render(
      <Select label="Manual placeholder" placeholder="Generated placeholder">
        <option value="">Manual placeholder</option>
        <option value="production">Production</option>
      </Select>
    );

    expect(screen.queryByRole('option', { name: 'Generated placeholder' })).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Manual placeholder' })).toBeInTheDocument();
  });

  it('renders optgroup children', () => {
    render(
      <Select label="Region" defaultValue="us-east-1">
        <optgroup label="United States">
          <option value="us-east-1">US East 1</option>
          <option value="us-west-2">US West 2</option>
        </optgroup>
      </Select>
    );

    expect(screen.getByRole('group', { name: 'United States' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'US East 1' })).toBeInTheDocument();
  });

  it('renders decorative chevron outside the select focus target', () => {
    const { container } = render(<Select label="Chevron select">{options}</Select>);

    const chevron = container.querySelector('[aria-hidden="true"]');

    expect(chevron).toBeInTheDocument();
    expect(window.getComputedStyle(chevron as Element).pointerEvents).toBe('none');
  });

  it('does not leak transient style props to the DOM', () => {
    render(
      <Select label="Transient" fullWidth invalid size="lg">
        {options}
      </Select>
    );

    const select = screen.getByLabelText('Transient');

    expect(select).not.toHaveAttribute('$size');
    expect(select.parentElement).not.toHaveAttribute('$fullWidth');
    expect(select.parentElement).not.toHaveAttribute('$invalid');
  });
});
