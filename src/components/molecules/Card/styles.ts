import styled, { css } from 'styled-components';
import { colors, typography, radii, space } from '@/design-tokens';

type CardElevation = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  elevation?: CardElevation;
}

export const CardContainer = styled.div<CardProps>`
  background-color: ${colors.white};
  border-radius: ${radii.large};
  padding: ${space[4]};
  display: flex;
  flex-direction: column;
  gap: ${space[3]};
  font-family: ${typography.body};

  ${({ elevation = 'md' }) => {
    switch (elevation) {
      case 'none':
        return css`box-shadow: none;`;
      case 'sm':
        return css`box-shadow: 0 1px 4px rgba(0,0,0,0.08);`;
      case 'lg':
        return css`box-shadow: 0 4px 20px rgba(0,0,0,0.12);`;
      case 'md':
      default:
        return css`box-shadow: 0 2px 12px rgba(0,0,0,0.1);`;
    }
  }}
`;

export const CardTitle = styled.h3`
  font-family: ${typography.heading};
  font-size: 18px;
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
`;

export const CardBody = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.text};
`;
