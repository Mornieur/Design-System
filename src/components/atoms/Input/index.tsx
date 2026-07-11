import {
  forwardRef,
  useId,
  useRef,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactNode
} from 'react';
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
      invalid = false,
      size = 'md',
      startIcon,
      endIcon,
      fullWidth = false,
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
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedId = useId();
    const inputId = id ?? `feitoza-input-${generatedId}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;
    const isInvalid = Boolean(invalid || errorMessage);
    const describedBy = [ariaDescribedBy, helperId, isInvalid ? errorId : undefined]
      .filter(Boolean)
      .join(' ');

    const setRefs = (node: HTMLInputElement | null) => {
      inputRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      if (ref) {
        ref.current = node;
      }
    };

    const handleControlMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      if (disabled || event.target === inputRef.current) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    };

    return (
      <S.Root className={className} style={style} $fullWidth={fullWidth}>
        {label ? (
          <S.Label htmlFor={inputId} $disabled={disabled}>
            <span>{label}</span>
            {required ? <S.RequiredMark aria-hidden="true">*</S.RequiredMark> : null}
          </S.Label>
        ) : null}

        <S.Control
          onMouseDown={handleControlMouseDown}
          $disabled={disabled}
          $fullWidth={fullWidth}
          $invalid={isInvalid}
          $readOnly={readOnly}
          $size={size}
        >
          {startIcon ? <S.IconSlot aria-hidden="true">{startIcon}</S.IconSlot> : null}

          <S.Field
            ref={setRefs}
            id={inputId}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={isInvalid ? true : ariaInvalid}
            {...props}
          />

          {endIcon ? <S.IconSlot aria-hidden="true">{endIcon}</S.IconSlot> : null}
        </S.Control>

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

Input.displayName = 'Input';

export default Input;
