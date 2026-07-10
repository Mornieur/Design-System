import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type SkeletonRadius = 'none' | 'sm' | 'md' | 'pill';

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
  height?: string | number;
  radius?: SkeletonRadius;
  animated?: boolean;
};

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, radius = 'sm', animated = true, style, ...props }, ref) => {
    return (
      <S.Skeleton
        ref={ref}
        aria-hidden="true"
        $animated={animated}
        $radius={radius}
        style={{ width, height, ...style }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
