import {
  forwardRef,
  useId,
  useRef,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactNode
} from 'react';
import Field, { useOptionalFieldContext } from '@/components/atoms/Field';
import { composeAriaDescribedBy, createFieldSlotIds, resolveFieldControlId } from '@/internal/ids/fieldSlotIds';
import { useComposedRefs } from '@/internal/refs/useComposedRefs';
import * as S from './styles';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  size?: InputSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      invalid,
      size = 'md',
      startIcon,
      endIcon,
      fullWidth,
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
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedId = useId();
    const inputId =
      fieldContext?.controlId ??
      id ??
      resolveFieldControlId({ generatedId, prefix: 'feitoza-input' });
    const slotIds = createFieldSlotIds(inputId);
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
    const composedRefs = useComposedRefs(inputRef, ref);

    const handleControlMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      if (isDisabled || event.target === inputRef.current) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    };

    const control = (
      <S.Control
        onMouseDown={handleControlMouseDown}
        $disabled={isDisabled}
        $fullWidth={isFullWidth}
        $invalid={isInvalid}
        $readOnly={readOnly}
        $size={size}
      >
        {startIcon ? <S.IconSlot aria-hidden="true">{startIcon}</S.IconSlot> : null}

        <S.Field
          ref={composedRefs}
          id={inputId}
          disabled={isDisabled}
          readOnly={readOnly}
          required={isRequired}
          aria-describedby={describedBy}
          aria-invalid={isInvalid ? true : ariaInvalid}
          {...props}
        />

        {endIcon ? <S.IconSlot aria-hidden="true">{endIcon}</S.IconSlot> : null}
      </S.Control>
    );

    if (fieldContext) {
      return control;
    }

    return (
      <Field.Root
        controlId={inputId}
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

Input.displayName = 'Input';

export default Input;
