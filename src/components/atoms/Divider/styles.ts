import { css, styled } from 'styled-components';
import { semanticColors, space } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import type { DividerOrientation } from '.';

interface StyledDividerProps {
  $orientation?: DividerOrientation;
  $inset?: boolean;
}

export const StyledDivider = styled.hr<StyledDividerProps>`
  flex-shrink: 0;
  border: 0;
  background-color: ${semanticColors.dark.border};

  ${({ $inset = false, $orientation = 'horizontal' }) =>
    $orientation === 'vertical'
      ? css`
          align-self: stretch;
          width: ${borders.width.hairline};
          min-height: 1em;
          margin: ${$inset ? `${space[2]} 0` : '0'};
        `
      : css`
          width: 100%;
          height: ${borders.width.hairline};
          margin: ${$inset ? `0 ${space[4]}` : '0'};
        `}
`;
