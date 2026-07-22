import {forwardRef, useId, type FieldsetHTMLAttributes, type ReactNode} from 'react';
import * as S from './styles';

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export type RadioGroupProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  legend: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  orientation?: RadioGroupOrientation;
};

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      id,
      legend,
      children,
      helperText,
      errorMessage,
      invalid = false,
      orientation = 'vertical',
      disabled,
      className,
      style,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const groupId = id ?? `feitoza-radio-group-${generatedId}`;
    const helperId = helperText ? `${groupId}-helper` : undefined;
    const errorId = errorMessage ? `${groupId}-error` : undefined;
    const isInvalid = Boolean(invalid || errorMessage);
    const describedBy = [ariaDescribedBy, helperId, isInvalid ? errorId : undefined]
      .filter(Boolean)
      .join(' ');

    return (
      <S.Root
        {...props}
        ref={ref}
        id={groupId}
        disabled={disabled}
        className={className}
        style={style}
        aria-describedby={describedBy || undefined}
        aria-invalid={isInvalid ? true : ariaInvalid}
      >
        <S.Legend $disabled={disabled}>{legend}</S.Legend>
        <S.Options $orientation={orientation}>{children}</S.Options>

        {helperText ? (
          <S.Message id={helperId} $tone="muted" $disabled={disabled}>
            {helperText}
          </S.Message>
        ) : null}

        {isInvalid && errorMessage ? (
          <S.Message id={errorId} $tone="danger" $disabled={disabled}>
            {errorMessage}
          </S.Message>
        ) : null}
      </S.Root>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
