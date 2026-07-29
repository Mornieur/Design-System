import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type ProgressTone = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ProgressSize = 'sm' | 'md';

export type ProgressProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  value?: number;
  max?: number;
  tone?: ProgressTone;
  size?: ProgressSize;
  label?: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, tone = 'primary', size = 'md', label, ...props }, ref) => {
    const safeMax = max > 0 ? max : 100;
    const normalizedValue = value === undefined ? undefined : clamp(value, 0, safeMax);
    const percentage =
      normalizedValue === undefined ? undefined : Math.round((normalizedValue / safeMax) * 100);
    const accessibleLabel = label ?? 'Progress';

    return (
      <S.Track
        ref={ref}
        role="progressbar"
        aria-label={accessibleLabel}
        aria-valuemax={safeMax}
        aria-valuemin={0}
        aria-valuenow={normalizedValue}
        $size={size}
        {...props}
      >
        <S.Indicator
          $indeterminate={percentage === undefined}
          $tone={tone}
          style={{ width: percentage === undefined ? '38%' : `${percentage}%` }}
        />
      </S.Track>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
