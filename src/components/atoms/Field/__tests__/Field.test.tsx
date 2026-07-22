import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import Field from '..';
import Input from '../../Input';

describe('Field', () => {
  it('associates the label with the nested control', () => {
    render(
      <Field.Root>
        <Field.Label>Service name</Field.Label>
        <Input />
      </Field.Root>
    );

    expect(screen.getByLabelText('Service name')).toBeInTheDocument();
  });

  it('associates helper and error text with the nested control', () => {
    render(
      <Field.Root invalid>
        <Field.Label>Workspace slug</Field.Label>
        <Input />
        <Field.HelperText>Use the public workspace slug.</Field.HelperText>
        <Field.ErrorText>Only lowercase letters are allowed.</Field.ErrorText>
      </Field.Root>
    );

    const input = screen.getByLabelText('Workspace slug');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription(
      'Use the public workspace slug. Only lowercase letters are allowed.'
    );
  });

  it('renders optional text when required is false', () => {
    render(
      <Field.Root optionalLabel="Optional">
        <Field.Label>Notes</Field.Label>
        <Input />
      </Field.Root>
    );

    expect(screen.getByText('Optional')).toBeInTheDocument();
  });

  it('forwards ref, className, and style to the root element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <Field.Root ref={ref} className="custom-field" style={{ width: 320 }}>
        <Field.Label>Styled field</Field.Label>
        <Input />
      </Field.Root>
    );

    expect(ref.current).toBe(container.firstChild);
    expect(container.firstChild).toHaveClass('custom-field');
    expect(container.firstChild).toHaveStyle({ width: '320px' });
  });

  it('uses an explicit controlId when provided', () => {
    render(
      <Field.Root controlId="custom-control">
        <Field.Label>Controlled id</Field.Label>
        <Input />
      </Field.Root>
    );

    expect(screen.getByLabelText('Controlled id')).toHaveAttribute('id', 'custom-control');
  });

  it('applies field-level disabled and required semantics to the nested control', () => {
    render(
      <Field.Root disabled required>
        <Field.Label>Deployment target</Field.Label>
        <Input disabled={false} required={false} />
      </Field.Root>
    );

    const input = screen.getByRole('textbox', { name: /Deployment target/ });

    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });
});
