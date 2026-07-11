import { SearchX } from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import * as S from './styles';

export type EmptyStateTone = 'neutral' | 'info' | 'danger';

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  secondaryAction?: ReactNode;
  tone?: EmptyStateTone;
};

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon,
      action,
      secondaryAction,
      tone = 'neutral',
      ...props
    },
    ref
  ) => {
    return (
      <S.Root ref={ref} $tone={tone} {...props}>
        <S.IconSlot aria-hidden="true" $tone={tone}>
          {icon ?? <SearchX />}
        </S.IconSlot>
        <S.Title>{title}</S.Title>
        {description ? <S.Description>{description}</S.Description> : null}
        {action || secondaryAction ? (
          <S.Actions>
            {action}
            {secondaryAction}
          </S.Actions>
        ) : null}
      </S.Root>
    );
  }
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;
