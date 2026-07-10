import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  outlined?: boolean;
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'neutral', size = 'md', outlined = false, ...props }, ref) => {
    return (
      <S.StyledBadge
        ref={ref}
        $outlined={outlined}
        $size={size}
        $variant={variant}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
