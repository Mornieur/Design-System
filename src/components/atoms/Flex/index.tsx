import type { HTMLAttributes } from 'react';
import * as S from './styles';
import { space } from '@/design-tokens';

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: 'row' | 'column';
  justify?: 
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  gap?: keyof typeof space;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const Flex = ({
  direction = 'row',
  justify,
  align,
  gap,
  wrap,
  ...props
}: FlexProps) => {
  return (
    <S.StyledFlex
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      wrap={wrap}
      {...props}
    />
  );
};

export default Flex;
