import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';
import { colors, space, radii } from '@/design-tokens';

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  padding?: keyof typeof space;
  margin?: keyof typeof space;
  bg?: keyof typeof colors;
  radius?: keyof typeof radii;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ padding, margin, bg, radius, ...props }, ref) => {
    return (
      <S.StyledBox
        ref={ref}
        $padding={padding}
        $margin={margin}
        $bg={bg}
        $radius={radius}
        {...props}
      />
    );
  }
);

Box.displayName = 'Box';

export default Box;
