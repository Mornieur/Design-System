import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useMemo,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent
} from 'react';
import { composeEventHandlers } from '@/internal/events/composeEventHandlers';
import { useControllableState } from '@/internal/state/useControllableState';
import * as S from './styles';

type TabsContextValue = {
  value: string;
  baseId: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Tabs components must be used within <Tabs.Root>.');
  }

  return context;
};

export type TabsRootProps = HTMLAttributes<HTMLDivElement> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const Root = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ value, defaultValue, onValueChange, ...props }, ref) => {
    const generatedId = useId();
    const [currentValue, setValue] = useControllableState({
      value,
      defaultValue: defaultValue ?? '',
      onChange: onValueChange
    });

    const context = useMemo<TabsContextValue>(
      () => ({
        value: currentValue,
        baseId: `feitoza-tabs-${generatedId}`,
        setValue
      }),
      [currentValue, generatedId, setValue]
    );

    return (
      <TabsContext.Provider value={context}>
        <S.Root ref={ref} {...props} />
      </TabsContext.Provider>
    );
  }
);

Root.displayName = 'Tabs.Root';

export type TabsListProps = HTMLAttributes<HTMLDivElement>;

const List = forwardRef<HTMLDivElement, TabsListProps>((props, ref) => {
  return <S.List ref={ref} role="tablist" {...props} />;
});

List.displayName = 'Tabs.List';

export type TabsTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

const focusTab = (currentTarget: HTMLButtonElement, direction: 'next' | 'previous' | 'first' | 'last') => {
  const tabs = Array.from(
    currentTarget.closest('[role="tablist"]')?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]:not(:disabled)'
    ) ?? []
  );
  const currentIndex = tabs.indexOf(currentTarget);

  if (!tabs.length || currentIndex === -1) {
    return;
  }

  const targetIndex = {
    next: (currentIndex + 1) % tabs.length,
    previous: (currentIndex - 1 + tabs.length) % tabs.length,
    first: 0,
    last: tabs.length - 1
  }[direction];

  tabs[targetIndex]?.focus();
  tabs[targetIndex]?.click();
};

const Trigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled, onClick, onKeyDown, type = 'button', ...props }, ref) => {
    const context = useTabsContext();
    const selected = context.value === value;
    const triggerId = `${context.baseId}-trigger-${value}`;
    const contentId = `${context.baseId}-content-${value}`;

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        focusTab(event.currentTarget, 'next');
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        focusTab(event.currentTarget, 'previous');
      }

      if (event.key === 'Home') {
        event.preventDefault();
        focusTab(event.currentTarget, 'first');
      }

      if (event.key === 'End') {
        event.preventDefault();
        focusTab(event.currentTarget, 'last');
      }
    };

    return (
      <S.Trigger
        ref={ref}
        id={triggerId}
        type={type}
        role="tab"
        aria-controls={contentId}
        aria-selected={selected}
        disabled={disabled}
        tabIndex={selected ? 0 : -1}
        $selected={selected}
        onClick={composeEventHandlers(onClick, (event) => {
          if (!event.defaultPrevented && !disabled) {
            context.setValue(value);
          }
        })}
        onKeyDown={composeEventHandlers(onKeyDown, handleKeyDown)}
        {...props}
      />
    );
  }
);

Trigger.displayName = 'Tabs.Trigger';

export type TabsContentProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const Content = forwardRef<HTMLDivElement, TabsContentProps>(({ value, ...props }, ref) => {
  const context = useTabsContext();
  const selected = context.value === value;

  return (
    <S.Content
      ref={ref}
      id={`${context.baseId}-content-${value}`}
      role="tabpanel"
      aria-labelledby={`${context.baseId}-trigger-${value}`}
      hidden={!selected}
      tabIndex={0}
      {...props}
    />
  );
});

Content.displayName = 'Tabs.Content';

const Tabs = {
  Root,
  List,
  Trigger,
  Content
};

export default Tabs;
