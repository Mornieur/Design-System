import styled, { css } from 'styled-components';
import {
  colorRoles,
  motion,
  radiusRoles,
  semanticColors,
  space,
  typography
} from '@/design-tokens';
import { borders } from '@/design-tokens/borders';

interface TriggerStyleProps {
  $selected?: boolean;
}

export const Root = styled.div`
  width: 100%;
  font-family: ${typography.roles.interface};
`;

export const List = styled.div`
  display: inline-flex;
  max-width: 100%;
  gap: ${space[1]};
  padding: ${space[1]};
  border: ${borders.width.hairline} ${borders.style.solid} ${semanticColors.dark.border};
  border-radius: ${radiusRoles.surface};
  background-color: color-mix(in srgb, ${semanticColors.dark.backgroundAlt} 82%, transparent);
  overflow-x: auto;
  scrollbar-width: thin;
`;

export const Trigger = styled.button<TriggerStyleProps>`
  min-height: 36px;
  padding: ${space[2]} ${space[3]};
  border: ${borders.width.hairline} ${borders.style.solid} transparent;
  border-radius: ${radiusRoles.dense};
  background: transparent;
  color: ${semanticColors.dark.textSecondary};
  cursor: pointer;
  font: inherit;
  font-size: 0.875rem;
  font-weight: ${typography.weights.medium};
  line-height: ${typography.lineHeights.tight};
  transition:
    background-color ${motion.duration.fast} ${motion.easing.standard},
    border-color ${motion.duration.fast} ${motion.easing.standard},
    color ${motion.duration.fast} ${motion.easing.standard},
    box-shadow ${motion.duration.fast} ${motion.easing.standard};

  &:not(:disabled):hover {
    color: ${semanticColors.dark.text};
    background-color: color-mix(in srgb, ${semanticColors.dark.surfaceRaised} 52%, transparent);
  }

  &:focus-visible {
    outline: 0;
    border-color: ${semanticColors.dark.focus};
    box-shadow: 0 0 0 4px ${colorRoles.dark.focus.shadow};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${semanticColors.dark.textMuted};
    opacity: 0.58;
  }

  ${({ $selected = false }) =>
    $selected
      ? css`
          color: ${semanticColors.dark.text};
          border-color: ${colorRoles.dark.selection.border};
          background-color: ${colorRoles.dark.selection.background};
        `
      : null}
`;

export const Content = styled.div`
  margin-top: ${space[4]};
  color: ${semanticColors.dark.text};

  &:focus-visible {
    outline: 2px solid ${semanticColors.dark.focus};
    outline-offset: 2px;
  }
`;
