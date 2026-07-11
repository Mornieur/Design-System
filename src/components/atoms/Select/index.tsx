import {
  Children,
  forwardRef,
  isValidElement,
  useId,
  type ReactNode,
  type SelectHTMLAttributes
} from 'react';
import { ChevronDown } from 'lucide-react';
import * as S from './styles';

export type SelectSize = 'sm' | 'md' | 'lg';

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'multiple'> & {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  size?: SelectSize;
  fullWidth?: boolean;
  placeholder?: string;
};

const hasDirectEmptyValueOption = (children: ReactNode) => {
  return Children.toArray(children).some((child) => {
    if (!isValidElement(child) || child.type !== 'option') {
      return false;
    }

    return (child.props as { value?: unknown }).value === '';
  });
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      invalid = false,
      size = 'md',
      fullWidth = false,
      placeholder,
      disabled,
      required,
      className,
      style,
      children,
      defaultValue,
      value,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id ?? `feitoza-select-${generatedId}`;
    const helperId = helperText ? `${selectId}-helper` : undefined;
    const errorId = errorMessage ? `${selectId}-error` : undefined;
    const isInvalid = Boolean(invalid || errorMessage);
    const shouldRenderPlaceholder = Boolean(placeholder && !hasDirectEmptyValueOption(children));
    const describedBy = [ariaDescribedBy, helperId, isInvalid ? errorId : undefined]
      .filter(Boolean)
      .join(' ');

    return (
      <S.Root className={className} style={style} $fullWidth={fullWidth}>
        {label ? (
          <S.Label htmlFor={selectId} $disabled={disabled}>
            <span>{label}</span>
            {required ? <S.RequiredMark aria-hidden="true">*</S.RequiredMark> : null}
          </S.Label>
        ) : null}

        <S.Control $disabled={disabled} $fullWidth={fullWidth} $invalid={isInvalid} $size={size}>
          <S.Field
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-describedby={describedBy || undefined}
            aria-invalid={isInvalid ? true : ariaInvalid}
            defaultValue={
              shouldRenderPlaceholder && value === undefined && defaultValue === undefined
                ? ''
                : defaultValue
            }
            value={value}
            $size={size}
            {...props}
          >
            {shouldRenderPlaceholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {children}
          </S.Field>

          <S.Chevron aria-hidden="true">
            <ChevronDown />
          </S.Chevron>
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

Select.displayName = 'Select';

export default Select;
