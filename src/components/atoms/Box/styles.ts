import { css, styled } from 'styled-components';
import { space, colors, radii } from '@/design-tokens';

interface BoxStyleProps {
  $padding?: keyof typeof space;
  $margin?: keyof typeof space;
  $bg?: keyof typeof colors;
  $radius?: keyof typeof radii;
}

export const StyledBox = styled.div<BoxStyleProps>`
  box-sizing: border-box;

  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${space[$padding]};
    `};

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${space[$margin]};
    `};

  ${({ $bg }) =>
    $bg &&
    css`
      background-color: ${colors[$bg]};
    `};

  ${({ $radius }) =>
    $radius &&
    css`
      border-radius: ${radii[$radius]};
    `};
`;
