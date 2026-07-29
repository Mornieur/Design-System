import {
  Children,
  forwardRef,
  isValidElement,
  useId,
  type ReactNode,
  type SelectHTMLAttributes
} from 'react';
import { ChevronDown } from 'lucide-react';
import Field, { useOptionalFieldContext } from '@/components/atoms/Field';
import {
  composeAriaDescribedBy,
  createFieldSlotIds,
  resolveFieldControlId
} from '@/internal/ids/fieldSlotIds';
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
      invalid,
      size = 'md',
      fullWidth,
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
    const fieldContext = useOptionalFieldContext();
    const generatedId = useId();
    const selectId =
      fieldContext?.controlId ??
      id ??
      resolveFieldControlId({ generatedId, prefix: 'feitoza-select' });
    const slotIds = createFieldSlotIds(selectId);
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
    const shouldRenderPlaceholder = Boolean(placeholder && !hasDirectEmptyValueOption(children));
    const describedBy = composeAriaDescribedBy(
      ariaDescribedBy,
      helperId,
      isInvalid ? errorId : undefined
    );

    const control = (
      <S.Control $disabled={isDisabled} $fullWidth={isFullWidth} $invalid={isInvalid} $size={size}>
        <S.Field
          ref={ref}
          id={selectId}
          disabled={isDisabled}
          required={isRequired}
          aria-describedby={describedBy}
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
    );

    if (fieldContext) {
      return control;
    }

    return (
      <Field.Root
        controlId={selectId}
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

Select.displayName = 'Select';

export default Select;
