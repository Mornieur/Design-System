import { forwardRef, useId, type ReactNode, type TextareaHTMLAttributes } from 'react';
import Field, { useOptionalFieldContext } from '@/components/atoms/Field';
import {
  composeAriaDescribedBy,
  createFieldSlotIds,
  resolveFieldControlId
} from '@/internal/ids/fieldSlotIds';
import * as S from './styles';

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  size?: TextareaSize;
  fullWidth?: boolean;
  resize?: TextareaResize;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      invalid,
      size = 'md',
      fullWidth,
      resize = 'vertical',
      disabled,
      readOnly,
      required,
      className,
      style,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const fieldContext = useOptionalFieldContext();
    const generatedId = useId();
    const textareaId =
      fieldContext?.controlId ??
      id ??
      resolveFieldControlId({ generatedId, prefix: 'feitoza-textarea' });
    const slotIds = createFieldSlotIds(textareaId);
    const helperId = fieldContext
      ? fieldContext.hasHelperText
        ? fieldContext.helperTextId
        : undefined
      : helperText
        ? slotIds.helperTextId
        : undefined;
    const errorId = fieldContext
      ? fieldContext.hasErrorText
        ? fieldContext.errorTextId
        : undefined
      : errorMessage
        ? slotIds.errorTextId
        : undefined;
    const isInvalid = fieldContext ? Boolean(fieldContext.invalid || invalid) : Boolean(invalid || errorMessage);
    const isDisabled = fieldContext ? fieldContext.disabled : disabled ?? false;
    const isRequired = fieldContext ? fieldContext.required : required ?? false;
    const isFullWidth = fieldContext ? fieldContext.fullWidth : fullWidth ?? false;
    const describedBy = composeAriaDescribedBy(
      ariaDescribedBy,
      helperId,
      isInvalid ? errorId : undefined
    );

    const control = (
      <S.Field
        ref={ref}
        id={textareaId}
        disabled={isDisabled}
        readOnly={readOnly}
        required={isRequired}
        aria-describedby={describedBy}
        aria-invalid={isInvalid ? true : ariaInvalid}
        $disabled={isDisabled}
        $fullWidth={isFullWidth}
        $invalid={isInvalid}
        $readOnly={readOnly}
        $resize={resize}
        $size={size}
        {...props}
      />
    );

    if (fieldContext) {
      return control;
    }

    return (
      <Field.Root
        controlId={textareaId}
        disabled={isDisabled}
        invalid={isInvalid}
        required={isRequired}
        fullWidth={isFullWidth}
        className={className}
        style={style}
      >
        {label ? <Field.Label>{label}</Field.Label> : null}
        {control}
        {helperText ? <Field.HelperText>{helperText}</Field.HelperText> : null}
        {isInvalid && errorMessage ? <Field.ErrorText>{errorMessage}</Field.ErrorText> : null}
      </Field.Root>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
