import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type SurfaceVariant = 'default' | 'secondary';

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SurfaceVariant;
};

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ variant = 'default', ...props }, ref) => {
    return <S.StyledSurface ref={ref} $variant={variant} {...props} />;
  }
);

Surface.displayName = 'Surface';

export default Surface;
