
import { createGlobalStyle } from 'styled-components';
import { colors, typography } from '@/design-tokens';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: ${typography.body};
    line-height: 1.5;
    background-color: ${colors.background};
    color: ${colors.text};
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
`;
