import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './styles';

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>((props, ref) => {
  return <S.Root {...props} ref={ref} />;
});

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
