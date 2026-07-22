import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import * as S from './styles';

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  fullWidth?: boolean;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      invalid = false,
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
    const generatedId = useId();
    const inputId = id ?? `feitoza-radio-${generatedId}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;
    const isInvalid = Boolean(invalid || errorMessage);
    const describedBy = [ariaDescribedBy, helperId, isInvalid ? errorId : undefined]
      .filter(Boolean)
      .join(' ');

    return (
      <S.Root className={className} style={style} $fullWidth={fullWidth}>
        <S.Control $disabled={disabled} $fullWidth={fullWidth}>
          <S.Field
            ref={ref}
            id={inputId}
            type="radio"
            disabled={disabled}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={isInvalid ? true : ariaInvalid}
            {...props}
          />
          <S.Indicator aria-hidden="true" $invalid={isInvalid}>
            <S.Dot />
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

Radio.displayName = 'Radio';

export default Radio;
