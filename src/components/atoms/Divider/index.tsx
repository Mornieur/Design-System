import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: DividerOrientation;
  inset?: boolean;
};

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      inset = false,
      'aria-orientation': ariaOrientation,
      ...props
    },
    ref
  ) => {
    return (
      <S.StyledDivider
        ref={ref}
        aria-orientation={orientation === 'vertical' ? 'vertical' : ariaOrientation}
        $inset={inset}
        $orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;
