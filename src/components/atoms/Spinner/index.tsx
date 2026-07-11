import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerTone = 'primary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'inherit';

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  size?: SpinnerSize;
  tone?: SpinnerTone;
  label?: string;
  decorative?: boolean;
};

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      size = 'md',
      tone = 'primary',
      label = 'Loading',
      decorative = false,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <S.Spinner
        ref={ref}
        aria-hidden={decorative ? true : undefined}
        aria-label={decorative ? undefined : ariaLabel ?? label}
        role={decorative ? undefined : 'status'}
        $size={size}
        $tone={tone}
        {...props}
      />
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
