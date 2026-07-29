import { styled } from 'styled-components';
import { semanticColors, space, typography } from '@/design-tokens';

type RootProps = {
  $fullWidth?: boolean;
};

type LabelProps = {
  $disabled?: boolean;
};

type MessageProps = {
  $tone: 'danger' | 'muted';
};

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

export const OptionalText = styled.span`
  color: ${semanticColors.dark.textMuted};
`;

export const Message = styled.p<MessageProps>`
  margin: 0;
  color: ${({ $tone }) =>
    $tone === 'danger' ? semanticColors.dark.danger : semanticColors.dark.textMuted};
  font-size: 0.8125rem;
  line-height: ${typography.lineHeights.normal};
`;
