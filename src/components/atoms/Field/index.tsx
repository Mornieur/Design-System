import {
  Children,
  forwardRef,
  isValidElement,
  useId,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode
} from 'react';
import {
  createFieldSlotIds,
  resolveFieldControlId
} from '@/internal/ids/fieldSlotIds';
import { FieldContext, useFieldContext } from './context';
import * as S from './styles';

function hasChildType(children: ReactNode, component: unknown): boolean {
  return Children.toArray(children).some((child) => {
    if (!isValidElement(child)) {
      return false;
    }

    if (child.type === component) {
      return true;
    }

    return hasChildType((child.props as { children?: ReactNode }).children, component);
  });
}

export type FieldRootProps = HTMLAttributes<HTMLDivElement> & {
  controlId?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  optionalLabel?: ReactNode;
};

export type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export type FieldMessageProps = HTMLAttributes<HTMLParagraphElement>;

const Label = forwardRef<HTMLLabelElement, FieldLabelProps>(({ children, htmlFor, ...props }, ref) => {
  const context = useFieldContext();

  return (
    <S.Label
      {...props}
      ref={ref}
      id={context.labelId}
      htmlFor={htmlFor ?? context.controlId}
      $disabled={context.disabled}
    >
      <span>{children}</span>
      {context.required ? <S.RequiredMark aria-hidden="true">*</S.RequiredMark> : null}
      {!context.required && context.optionalLabel ? (
        <S.OptionalText>{context.optionalLabel}</S.OptionalText>
      ) : null}
    </S.Label>
  );
});

Label.displayName = 'Field.Label';

const HelperText = forwardRef<HTMLParagraphElement, FieldMessageProps>(({ children, ...props }, ref) => {
  const context = useFieldContext();

  return (
    <S.Message {...props} ref={ref} id={context.helperTextId} $tone="muted">
      {children}
    </S.Message>
  );
});

HelperText.displayName = 'Field.HelperText';

const ErrorText = forwardRef<HTMLParagraphElement, FieldMessageProps>(({ children, ...props }, ref) => {
  const context = useFieldContext();

  return (
    <S.Message {...props} ref={ref} id={context.errorTextId} $tone="danger">
      {children}
    </S.Message>
  );
});

ErrorText.displayName = 'Field.ErrorText';

const Root = forwardRef<HTMLDivElement, FieldRootProps>(
  (
    {
      id,
      controlId,
      children,
      disabled = false,
      invalid = false,
      required = false,
      fullWidth = false,
      optionalLabel,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const resolvedControlId = resolveFieldControlId({
      id: controlId,
      generatedId,
      prefix: id ?? 'feitoza-field'
    });
    const slotIds = createFieldSlotIds(resolvedControlId);
    const hasHelperText = hasChildType(children, HelperText);
    const hasErrorText = hasChildType(children, ErrorText);

    return (
      <FieldContext.Provider
        value={{
          controlId: resolvedControlId,
          labelId: slotIds.labelId,
          helperTextId: slotIds.helperTextId,
          errorTextId: slotIds.errorTextId,
          disabled,
          invalid,
          required,
          fullWidth,
          optionalLabel,
          hasHelperText,
          hasErrorText
        }}
      >
        <S.Root {...props} id={id} ref={ref} $fullWidth={fullWidth}>
          {children}
        </S.Root>
      </FieldContext.Provider>
    );
  }
);

Root.displayName = 'Field.Root';

const Field = {
  Root,
  Label,
  HelperText,
  ErrorText
};

export { useFieldContext, useOptionalFieldContext } from './context';
export default Field;
