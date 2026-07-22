import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  type InputHTMLAttributes,
  type ReactNode
} from 'react';
import { useComposedRefs } from '@/internal/refs/useComposedRefs';
import * as S from './styles';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  indeterminate?: boolean;
  fullWidth?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      invalid = false,
      indeterminate = false,
      fullWidth = false,
      disabled,
      required,
      className,
      style,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedId = useId();
    const inputId = id ?? `feitoza-checkbox-${generatedId}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;
    const isInvalid = Boolean(invalid || errorMessage);
    const describedBy = [ariaDescribedBy, helperId, isInvalid ? errorId : undefined]
      .filter(Boolean)
      .join(' ');

    const composedRefs = useComposedRefs(inputRef, ref);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <S.Root className={className} style={style} $fullWidth={fullWidth}>
        <S.Control $disabled={disabled} $fullWidth={fullWidth}>
          <S.Field
            ref={composedRefs}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={isInvalid ? true : ariaInvalid}
            {...props}
          />
          <S.Indicator aria-hidden="true" $invalid={isInvalid} $indeterminate={indeterminate}>
            <S.Checkmark viewBox="0 0 16 16" focusable="false">
              <path d="M3.5 8.5L6.5 11.5L12.5 4.75" />
            </S.Checkmark>
            <S.IndeterminateBar />
          </S.Indicator>
          {label ? (
            <S.Label htmlFor={inputId} $disabled={disabled}>
              <span>{label}</span>
              {required ? <S.RequiredMark aria-hidden="true">*</S.RequiredMark> : null}
            </S.Label>
          ) : null}
        </S.Control>

        {helperText ? (
          <S.Message id={helperId} $tone="muted" $offset={Boolean(label)}>
            {helperText}
          </S.Message>
        ) : null}

        {isInvalid && errorMessage ? (
          <S.Message id={errorId} $tone="danger" $offset={Boolean(label)}>
            {errorMessage}
          </S.Message>
        ) : null}
      </S.Root>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
