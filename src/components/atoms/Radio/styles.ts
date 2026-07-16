import styled, { css } from 'styled-components';
import { colorRoles, motion, semanticColors, space, typography } from '@/design-tokens';
import { borders } from '@/design-tokens/borders';
import { focus } from '@/design-tokens/focus';
import { states } from '@/design-tokens/states';

type RootProps = {
  $fullWidth?: boolean;
};

type ControlProps = {
  $disabled?: boolean;
  $fullWidth?: boolean;
};

type LabelProps = {
  $disabled?: boolean;
};

type IndicatorProps = {
  $invalid?: boolean;
};

type MessageProps = {
  $tone: 'danger' | 'muted';
  $offset?: boolean;
};

const indicatorSize = '20px';
const dotSize = '8px';
const indicatorOffset = `calc(${indicatorSize} + ${space[3]})`;

export const Root = styled.div<RootProps>`
  box-sizing: border-box;
  display: inline-flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  flex-direction: column;
  gap: ${space[2]};
  color: ${semanticColors.dark.text};
  font-family: ${typography.roles.interface};
`;

export const Control = styled.div<ControlProps>`
  position: relative;
  display: inline-flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  align-items: flex-start;
  gap: ${space[3]};
  color: inherit;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: ${states.opacity.disabled};
    `}
`;

export const Field = styled.input`
  position: absolute;
  inset: 0 auto auto 0;
  width: ${indicatorSize};
  height: ${indicatorSize};
  margin: 0;
  opacity: 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-visible + span {
    box-shadow: 0 0 0 ${focus.ringWidth} ${colorRoles.dark.focus.shadow};
  }

  &:checked + span {
    border-color: ${semanticColors.dark.focus};
    background-color: ${semanticColors.dark.backgroundAlt};
    color: ${semanticColors.dark.focus};
  }

  &:checked + span div {
    opacity: 1;
    transform: scale(1);
  }

  &:disabled + span {
    border-color: ${semanticColors.dark.borderSubtle};
    background-color: ${semanticColors.dark.surfaceRaised};
    color: ${semanticColors.dark.textMuted};
  }
`;

export const Indicator = styled.span<IndicatorProps>`
  box-sizing: border-box;
  display: inline-flex;
  width: ${indicatorSize};
  height: ${indicatorSize};
  flex: 0 0 ${indicatorSize};
  align-items: center;
  justify-content: center;
  border: ${borders.width.hairline} ${borders.style.solid}
    ${({ $invalid }) => ($invalid ? semanticColors.dark.danger : semanticColors.dark.border)};
  border-radius: 999px;
  background-color: ${semanticColors.dark.backgroundAlt};
  color: ${semanticColors.dark.text};
  transition:
    background-color ${motion.duration.normal} ${motion.easing.standard},
    border-color ${motion.duration.normal} ${motion.easing.standard},
    box-shadow ${motion.duration.normal} ${motion.easing.standard},
    opacity ${motion.duration.normal} ${motion.easing.standard};
  pointer-events: none;

  ${Control}:hover & {
    border-color: ${({ $invalid }) =>
      $invalid ? semanticColors.dark.danger : semanticColors.dark.borderStrong};
    background-color: ${semanticColors.dark.surface};
  }
`;

export const Dot = styled.div`
  width: ${dotSize};
  height: ${dotSize};
  border-radius: 999px;
  background-color: currentColor;
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity ${motion.duration.fast} ${motion.easing.standard},
    transform ${motion.duration.fast} ${motion.easing.standard};
`;

export const Label = styled.label<LabelProps>`
  display: inline-flex;
  min-height: ${indicatorSize};
  align-items: center;
  gap: ${space[1]};
  color: ${({ $disabled }) =>
    $disabled ? semanticColors.dark.textMuted : semanticColors.dark.textSecondary};
  font-size: 0.875rem;
  font-weight: ${typography.weights.medium};
  line-height: ${typography.lineHeights.normal};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const RequiredMark = styled.span`
  color: ${semanticColors.dark.danger};
`;

export const Message = styled.p<MessageProps>`
  margin: 0;
  padding-left: ${({ $offset }) => ($offset ? indicatorOffset : 0)};
  color: ${({ $tone }) =>
    $tone === 'danger' ? semanticColors.dark.danger : semanticColors.dark.textMuted};
  font-size: 0.8125rem;
  line-height: ${typography.lineHeights.normal};
`;
