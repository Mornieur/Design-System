import { styled } from 'styled-components';
import { space } from '@/design-tokens';
import {
  buttonBaseStyles,
  buttonVariantStyles,
  iconButtonSizeStyles,
  type ButtonSize,
  type ButtonVariant
} from '@/components/atoms/Button/shared';

type RootProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
};

type IconSlotProps = {
  $size: ButtonSize;
};

const iconGlyphSizes = {
  sm: '16px',
  md: '18px',
  lg: '20px'
} satisfies Record<ButtonSize, string>;

export const Root = styled.button<RootProps>`
  ${buttonBaseStyles}
  ${({ $variant }) => buttonVariantStyles($variant)}
  ${({ $size }) => iconButtonSizeStyles[$size]}
  padding: 0;
  flex-shrink: 0;
`;

export const IconSlot = styled.span<IconSlotProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => iconGlyphSizes[$size]};
  height: ${({ $size }) => iconGlyphSizes[$size]};
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }
`;

export const LoadingSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: ${space[1]};
`;
