import { css, styled } from 'styled-components';
import { colorRoles, motion, radii, semanticColors, space, typography } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import { focus } from '@/design-tokens/focus';
import { states } from '@/design-tokens/states';
import type { SelectSize } from './index';

type RootProps = {
  $fullWidth?: boolean;
};

type LabelProps = {
  $disabled?: boolean;
};

type ControlProps = {
  $disabled?: boolean;
  $fullWidth?: boolean;
  $invalid?: boolean;
  $size: SelectSize;
};

type FieldProps = {
  $size: SelectSize;
};

type MessageProps = {
  $tone: 'danger' | 'muted';
};

const sizeStyles = {
  sm: css`
    min-height: 40px;
    padding: 0 ${space[7]} 0 ${space[3]};
    font-size: 0.875rem;
  `,
  md: css`
    min-height: 44px;
    padding: 0 ${space[8]} 0 ${space[4]};
    font-size: 0.875rem;
  `,
  lg: css`
    min-height: 48px;
    padding: 0 ${space[8]} 0 ${space[4]};
    font-size: 0.9375rem;
  `
} as const;

export const Root = styled.div<RootProps>`
  box-sizing: border-box;
  display: inline-flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  flex-direction: column;
  gap: ${space[2]};
  color: ${semanticColors.dark.text};
  font-family: ${typography.roles.interface};
`;

export const Label = styled.label<LabelProps>`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: ${space[1]};
  color: ${({ $disabled }) =>
    $disabled ? semanticColors.dark.textMuted : semanticColors.dark.textSecondary};
  font-family: ${typography.roles.data};
  font-size: 0.75rem;
  font-weight: ${typography.weights.medium};
  line-height: ${typography.lineHeights.normal};
`;

export const RequiredMark = styled.span`
  color: ${semanticColors.dark.danger};
`;

export const Control = styled.div<ControlProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'min(320px, 100%)')};
  align-items: center;
  border: ${borders.width.hairline} ${borders.style.solid}
    ${({ $invalid }) => ($invalid ? semanticColors.dark.danger : semanticColors.dark.border)};
  border-radius: ${radii.small};
  background-color: ${semanticColors.dark.backgroundAlt};
  color: ${semanticColors.dark.text};
  transition:
    background-color ${motion.duration.normal} ${motion.easing.standard},
    border-color ${motion.duration.normal} ${motion.easing.standard},
    box-shadow ${motion.duration.normal} ${motion.easing.standard},
    opacity ${motion.duration.normal} ${motion.easing.standard};

  &:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? semanticColors.dark.surfaceRaised : semanticColors.dark.surface};
    border-color: ${({ $disabled, $invalid }) => {
      if ($disabled) return semanticColors.dark.borderSubtle;
      if ($invalid) return semanticColors.dark.danger;
      return semanticColors.dark.borderStrong;
    }};
  }

  &:focus-within {
    border-color: ${({ $invalid }) =>
      $invalid ? semanticColors.dark.danger : semanticColors.dark.focus};
  }

  &:has(select:focus-visible) {
    box-shadow: 0 0 0 ${focus.ringWidth}
      ${({ $invalid }) =>
        $invalid
          ? `color-mix(in srgb, ${semanticColors.dark.danger} ${Number(states.opacity.focus) * 100}%, transparent)`
          : colorRoles.dark.focus.shadow};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      border-color: ${semanticColors.dark.borderSubtle};
      background-color: ${semanticColors.dark.surfaceRaised};
      color: ${semanticColors.dark.textMuted};
      opacity: ${states.opacity.disabled};
    `}
`;

export const Field = styled.select<FieldProps>`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  appearance: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: ${typography.roles.interface};
  font-weight: ${typography.weights.regular};
  line-height: ${typography.lineHeights.normal};

  ${({ $size }) => sizeStyles[$size]}

  &:disabled {
    cursor: not-allowed;
    color: ${semanticColors.dark.textMuted};
  }

  &:focus {
    outline: 0;
  }
`;

export const Chevron = styled.span`
  position: absolute;
  right: ${space[3]};
  top: 50%;
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  color: ${semanticColors.dark.textMuted};
  pointer-events: none;
  transform: translateY(-50%);

  svg {
    width: 18px;
    height: 18px;
    stroke-width: 1.75;
  }
`;

export const Message = styled.p<MessageProps>`
  margin: 0;
  color: ${({ $tone }) =>
    $tone === 'danger' ? semanticColors.dark.danger : semanticColors.dark.textMuted};
  font-size: 0.8125rem;
  line-height: ${typography.lineHeights.normal};
`;
