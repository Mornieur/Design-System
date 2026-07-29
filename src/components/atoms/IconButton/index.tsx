import { forwardRef, useId, type ButtonHTMLAttributes, type ReactElement } from 'react';
import Spinner, { type SpinnerSize } from '@/components/atoms/Spinner';
import VisuallyHidden from '@/components/atoms/VisuallyHidden';
import { composeAriaDescribedBy } from '@/internal/ids/fieldSlotIds';
import * as S from './styles';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-label' | 'aria-labelledby' | 'children'
> & {
  icon: ReactElement;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: IconButtonSize;
  loading?: boolean;
  loadingLabel?: string;
  'aria-label': string;
};

const spinnerSizes: Record<IconButtonSize, SpinnerSize> = {
  sm: 'sm',
  md: 'sm',
  lg: 'md'
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'primary',
      size = 'md',
      loading = false,
      loadingLabel = 'Loading',
      disabled,
      type = 'button',
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const hasLoadingDescription = loading && loadingLabel.trim().length > 0;
    const loadingDescriptionId = hasLoadingDescription
      ? `feitoza-icon-button-loading-${generatedId}`
      : undefined;
    const describedBy = composeAriaDescribedBy(ariaDescribedBy, loadingDescriptionId);

    return (
      <S.Root
        {...props}
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        aria-busy={loading ? true : undefined}
        aria-describedby={describedBy}
        disabled={disabled || loading}
        $size={size}
        $variant={variant}
      >
        {loading ? (
          <>
            <S.LoadingSlot aria-hidden="true">
              <Spinner decorative size={spinnerSizes[size]} tone="inherit" />
            </S.LoadingSlot>
            {hasLoadingDescription ? (
              <VisuallyHidden id={loadingDescriptionId}>{loadingLabel}</VisuallyHidden>
            ) : null}
          </>
        ) : (
          <S.IconSlot aria-hidden="true" $size={size}>
            {icon}
          </S.IconSlot>
        )}
      </S.Root>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
