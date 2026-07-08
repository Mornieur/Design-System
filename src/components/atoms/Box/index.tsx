import { HTMLAttributes } from 'react';
import * as S from './styles';
import { colors, space, radii } from '@/design-tokens';

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  padding?: keyof typeof space;
  margin?: keyof typeof space;
  bg?: keyof typeof colors;
  radius?: keyof typeof radii;
};

export const Box = ({
  padding,
  margin,
  bg,
  radius,
  ...props
}: BoxProps) => {
  return (
    <S.StyledBox
      padding={padding}
      margin={margin}
      bg={bg}
      radius={radius}
      {...props}
    />
  );
};

export default Box;
