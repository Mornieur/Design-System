import { forwardRef, useId, type ReactNode, type TextareaHTMLAttributes } from 'react';
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
      invalid = false,
      size = 'md',
      fullWidth = false,
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
    const generatedId = useId();
    const textareaId = id ?? `feitoza-textarea-${generatedId}`;
    const helperId = helperText ? `${textareaId}-helper` : undefined;
    const errorId = errorMessage ? `${textareaId}-error` : undefined;
    const isInvalid = Boolean(invalid || errorMessage);
    const describedBy = [ariaDescribedBy, helperId, isInvalid ? errorId : undefined]
      .filter(Boolean)
      .join(' ');

    return (
      <S.Root className={className} style={style} $fullWidth={fullWidth}>
        {label ? (
          <S.Label htmlFor={textareaId} $disabled={disabled}>
            <span>{label}</span>
            {required ? <S.RequiredMark aria-hidden="true">*</S.RequiredMark> : null}
          </S.Label>
        ) : null}

        <S.Field
          ref={ref}
          id={textareaId}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-describedby={describedBy || undefined}
          aria-invalid={isInvalid ? true : ariaInvalid}
          $disabled={disabled}
          $fullWidth={fullWidth}
          $invalid={isInvalid}
          $readOnly={readOnly}
          $resize={resize}
          $size={size}
          {...props}
        />

        {helperText ? (
          <S.Message id={helperId} $tone="muted">
            {helperText}
          </S.Message>
        ) : null}

        {isInvalid && errorMessage ? (
          <S.Message id={errorId} $tone="danger">
            {errorMessage}
          </S.Message>
        ) : null}
      </S.Root>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
