import styled, { css } from 'styled-components';
import { space } from '@/design-tokens';

import type { FlexProps } from './index';

type FlexStyleProps = {
  $direction?: FlexProps['direction'];
  $justify?: FlexProps['justify'];
  $align?: FlexProps['align'];
  $gap?: FlexProps['gap'];
  $wrap?: FlexProps['wrap'];
};

export const StyledFlex = styled.div<FlexStyleProps>`
  display: flex;

  ${({ $direction }) =>
    $direction &&
    css`
      flex-direction: ${$direction};
    `}

  ${({ $justify }) =>
    $justify &&
    css`
      justify-content: ${$justify};
    `}

  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `}

  ${({ $wrap }) =>
    $wrap &&
    css`
      flex-wrap: ${$wrap};
    `}

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${space[$gap]};
    `}
`;
