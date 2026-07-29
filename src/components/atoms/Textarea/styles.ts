import { css, styled } from 'styled-components';
import { colorRoles, motion, radii, semanticColors, space, typography } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import { focus } from '@/design-tokens/focus';
import { states } from '@/design-tokens/states';
import type { TextareaResize, TextareaSize } from './index';

type RootProps = {
  $fullWidth?: boolean;
};

type LabelProps = {
  $disabled?: boolean;
};

type FieldProps = {
  $disabled?: boolean;
  $fullWidth?: boolean;
  $invalid?: boolean;
  $readOnly?: boolean;
  $resize: TextareaResize;
  $size: TextareaSize;
};

type MessageProps = {
  $tone: 'danger' | 'muted';
};

const sizeStyles = {
  sm: css`
    min-height: 80px;
    padding: ${space[2]} ${space[3]};
    font-size: 0.875rem;
  `,
  md: css`
    min-height: 96px;
    padding: ${space[3]};
    font-size: 0.875rem;
  `,
  lg: css`
    min-height: 120px;
    padding: ${space[3]} ${space[4]};
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

export const Field = styled.textarea<FieldProps>`
  box-sizing: border-box;
  display: block;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'min(360px, 100%)')};
  border: ${borders.width.hairline} ${borders.style.solid}
    ${({ $invalid }) => ($invalid ? semanticColors.dark.danger : semanticColors.dark.border)};
  border-radius: ${radii.small};
  outline: 0;
  background-color: ${({ $readOnly }) =>
    $readOnly ? semanticColors.dark.surfaceRaised : semanticColors.dark.backgroundAlt};
  caret-color: ${semanticColors.dark.focus};
  color: ${semanticColors.dark.text};
  font-family: ${typography.roles.interface};
  font-weight: ${typography.weights.regular};
  line-height: ${typography.lineHeights.normal};
  resize: ${({ $resize }) => $resize};
  transition:
    background-color ${motion.duration.normal} ${motion.easing.standard},
    border-color ${motion.duration.normal} ${motion.easing.standard},
    box-shadow ${motion.duration.normal} ${motion.easing.standard},
    opacity ${motion.duration.normal} ${motion.easing.standard};

  ${({ $size }) => sizeStyles[$size]}

  &::placeholder {
    color: ${semanticColors.dark.textMuted};
    opacity: 0.7;
  }

  &:hover {
    background-color: ${({ $disabled, $readOnly }) => {
      if ($disabled || $readOnly) return semanticColors.dark.surfaceRaised;
      return semanticColors.dark.surface;
    }};
    border-color: ${({ $disabled, $invalid }) => {
      if ($disabled) return semanticColors.dark.borderSubtle;
      if ($invalid) return semanticColors.dark.danger;
      return semanticColors.dark.borderStrong;
    }};
  }

  &:focus {
    border-color: ${({ $invalid }) =>
      $invalid ? semanticColors.dark.danger : semanticColors.dark.focus};
  }

  &:focus-visible {
    box-shadow: 0 0 0 ${focus.ringWidth}
      ${({ $invalid }) =>
        $invalid
          ? `color-mix(in srgb, ${semanticColors.dark.danger} ${Number(states.opacity.focus) * 100}%, transparent)`
          : colorRoles.dark.focus.shadow};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${semanticColors.dark.borderSubtle};
    background-color: ${semanticColors.dark.surfaceRaised};
    color: ${semanticColors.dark.textMuted};
    opacity: ${states.opacity.disabled};
  }

  &:read-only:not(:disabled) {
    cursor: default;
  }
`;

export const Message = styled.p<MessageProps>`
  margin: 0;
  color: ${({ $tone }) =>
    $tone === 'danger' ? semanticColors.dark.danger : semanticColors.dark.textMuted};
  font-size: 0.8125rem;
  line-height: ${typography.lineHeights.normal};
`;
