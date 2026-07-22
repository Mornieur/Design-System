import styled, {css} from 'styled-components';
import {motion, semanticColors, space, typography} from '@/design-tokens';
import {borders} from '@/design-tokens/borders';

import type {RadioGroupOrientation} from './index';

type LegendProps = {
  $disabled?: boolean;
};

type OptionsProps = {
  $orientation: RadioGroupOrientation;
};

type MessageProps = {
  $tone: 'danger' | 'muted';
  $disabled?: boolean;
};

export const Root = styled.fieldset`
  margin: 0;
  padding: 0;
  min-inline-size: 0;
  border: 0;
  display: grid;
  gap: ${space[3]};
  color: ${semanticColors.dark.text};
  font-family: ${typography.roles.interface};
`;

export const Legend = styled.legend<LegendProps>`
  padding: 0;
  color: ${({$disabled}) =>
    $disabled ? semanticColors.dark.textMuted : semanticColors.dark.text};
  font-size: 0.875rem;
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.normal};
`;

export const Options = styled.div<OptionsProps>`
  display: grid;
  gap: ${space[3]};

  > * {
    min-width: 0;
  }

  ${({$orientation}) =>
    $orientation === 'horizontal' &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: ${space[3]} ${space[4]};

      > * {
        flex: 1 1 220px;
      }
    `}
`;

export const Message = styled.p<MessageProps>`
  margin: 0;
  color: ${({$tone, $disabled}) => {
    if ($disabled) {
      return semanticColors.dark.textMuted;
    }

    return $tone === 'danger' ? semanticColors.dark.danger : semanticColors.dark.textMuted;
  }};
  font-size: 0.8125rem;
  line-height: ${typography.lineHeights.normal};
  transition: color ${motion.duration.normal} ${motion.easing.standard};

  ${({$tone}) =>
    $tone === 'danger' &&
    css`
      border-top: ${borders.width.hairline} ${borders.style.solid}
        ${semanticColors.dark.borderSubtle};
      padding-top: ${space[2]};
    `}
`;
