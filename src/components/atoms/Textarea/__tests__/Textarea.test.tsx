import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Textarea from '..';

describe('Textarea', () => {
  it('renders a native textarea with placeholder', () => {
    render(<Textarea placeholder="Write notes" />);

    expect(screen.getByPlaceholderText('Write notes').tagName).toBe('TEXTAREA');
  });

  it('associates label with the textarea', () => {
    render(<Textarea label="Summary" />);

    expect(screen.getByLabelText('Summary')).toBeInTheDocument();
  });

  it('preserves a provided id', () => {
    render(<Textarea id="custom-textarea" label="Custom id" />);

    expect(screen.getByLabelText('Custom id')).toHaveAttribute('id', 'custom-textarea');
  });

  it('generates an id when none is provided', () => {
    render(<Textarea label="Generated id" />);

    const textarea = screen.getByLabelText('Generated id');

    expect(textarea).toHaveAttribute('id');
    expect(textarea.getAttribute('id')).toMatch(/^feitoza-textarea-/);
  });

  it('forwards ref to the native textarea', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} label="Ref textarea" />);

    expect(ref.current).toBe(screen.getByLabelText('Ref textarea'));
  });

  it('passes className and style to the root element', () => {
    const { container } = render(
      <Textarea className="custom-textarea" style={{ width: 320 }} label="Styled textarea" />
    );

    expect(container.firstChild).toHaveClass('custom-textarea');
    expect(container.firstChild).toHaveStyle({ width: '320px' });
  });

  it('passes native textarea props to the textarea element', () => {
    render(
      <Textarea
        id="release-notes"
        name="releaseNotes"
        autoComplete="off"
        required
        rows={6}
        maxLength={120}
        defaultValue="Ship safely"
      />
    );

    const textarea = screen.getByDisplayValue('Ship safely');

    expect(textarea).toHaveAttribute('id', 'release-notes');
    expect(textarea).toHaveAttribute('name', 'releaseNotes');
    expect(textarea).toHaveAttribute('autocomplete', 'off');
    expect(textarea).toHaveAttribute('rows', '6');
    expect(textarea).toHaveAttribute('maxlength', '120');
    expect(textarea).toBeRequired();
  });

  it('calls onChange when the value changes', () => {
    const handleChange = vi.fn();

    render(<Textarea label="Notes" onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText('Notes'), { target: { value: 'Updated' } });

    expect(handleChange).toHaveBeenCalledOnce();
  });

  it('preserves native keyboard text entry', async () => {
    const user = userEvent.setup();

    render(<Textarea label="Keyboard textarea" />);

    const textarea = screen.getByLabelText('Keyboard textarea');

    await user.click(textarea);
    await user.keyboard('line one{Enter}line two');

    expect(textarea).toHaveValue('line one\nline two');
  });

  it('associates helper text through aria-describedby', () => {
    render(<Textarea label="Context" helperText="Include operational context." />);

    expect(screen.getByLabelText('Context')).toHaveAccessibleDescription(
      'Include operational context.'
    );
  });

  it('associates error text and marks the textarea invalid', () => {
    render(<Textarea label="Reason" errorMessage="Reason is required." />);

    const textarea = screen.getByLabelText('Reason');

    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveAccessibleDescription('Reason is required.');
  });

  it('keeps helper text associated when error text is present', () => {
    render(
      <Textarea
        label="Evidence"
        helperText="Add ticket IDs or commands."
        errorMessage="Evidence is required."
      />
    );

    expect(screen.getByLabelText('Evidence')).toHaveAccessibleDescription(
      'Add ticket IDs or commands. Evidence is required.'
    );
  });

  it('uses invalid prop without requiring an error message', () => {
    render(<Textarea label="Invalid textarea" invalid />);

    expect(screen.getByLabelText('Invalid textarea')).toHaveAttribute('aria-invalid', 'true');
  });

  it('keeps helper text associated when invalid is true without an error message', () => {
    render(<Textarea label="Invalid with helper" invalid helperText="Review this text." />);

    const textarea = screen.getByLabelText('Invalid with helper');

    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveAccessibleDescription('Review this text.');
  });

  it('preserves user supplied aria-invalid when not invalid internally', () => {
    render(<Textarea label="External invalid" aria-invalid="grammar" />);

    expect(screen.getByLabelText('External invalid')).toHaveAttribute('aria-invalid', 'grammar');
  });

  it('preserves user supplied aria-describedby with helper text', () => {
    render(
      <>
        <span id="external-description">External description.</span>
        <Textarea
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

  it('supports disabled state', () => {
    render(<Textarea label="Disabled textarea" disabled />);

    expect(screen.getByLabelText('Disabled textarea')).toBeDisabled();
  });

  it('supports required state', () => {
    render(<Textarea label="Required textarea" required />);

    expect(screen.getByLabelText(/Required textarea/)).toBeRequired();
  });

  it('supports readOnly state', () => {
    render(<Textarea label="Read only textarea" readOnly defaultValue="Locked" />);

    expect(screen.getByLabelText('Read only textarea')).toHaveAttribute('readonly');
  });

  it('supports focus on the native textarea', () => {
    render(<Textarea label="Focusable textarea" />);

    const textarea = screen.getByLabelText('Focusable textarea');

    textarea.focus();

    expect(textarea).toHaveFocus();
  });

  it('applies resize option through computed style', () => {
    render(<Textarea label="Resize none" resize="none" />);

    expect(window.getComputedStyle(screen.getByLabelText('Resize none')).resize).toBe('none');
  });

  it('does not leak transient style props to the DOM', () => {
    render(<Textarea label="Transient" fullWidth invalid size="lg" resize="both" />);

    const textarea = screen.getByLabelText('Transient');

    expect(textarea).not.toHaveAttribute('$size');
    expect(textarea).not.toHaveAttribute('$invalid');
    expect(textarea).not.toHaveAttribute('$fullWidth');
    expect(textarea).not.toHaveAttribute('$resize');
  });
});
