import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  type LucideIcon
} from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import * as S from './styles';

export type AlertVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  title?: ReactNode;
  icon?: ReactNode;
};

const defaultIcons: Record<AlertVariant, LucideIcon | undefined> = {
  neutral: Info,
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  danger: AlertCircle
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      icon,
      children,
      role,
      'aria-live': ariaLive,
      ...props
    },
    ref
  ) => {
    const Icon = defaultIcons[variant];
    const alertRole = role ?? (variant === 'danger' ? 'alert' : 'status');

    return (
      <S.Root
        ref={ref}
        role={alertRole}
        aria-live={ariaLive ?? (alertRole === 'alert' ? 'assertive' : 'polite')}
        $variant={variant}
        {...props}
      >
        <S.IconSlot aria-hidden="true" $variant={variant}>
          {icon ?? (Icon ? <Icon /> : null)}
        </S.IconSlot>
        <S.Content>
          {title ? <S.Title>{title}</S.Title> : null}
          {children ? <S.Description>{children}</S.Description> : null}
        </S.Content>
      </S.Root>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
