type EventWithDefaultPrevented = {
  defaultPrevented: boolean;
};

type ComposeEventHandlersOptions = {
  checkForDefaultPrevented?: boolean;
};

export function composeEventHandlers<TEvent extends EventWithDefaultPrevented>(
  externalEventHandler: ((event: TEvent) => void) | undefined,
  internalEventHandler: (event: TEvent) => void,
  { checkForDefaultPrevented = true }: ComposeEventHandlersOptions = {}
) {
  return (event: TEvent) => {
    externalEventHandler?.(event);

    if (checkForDefaultPrevented && event.defaultPrevented) {
      return;
    }

    internalEventHandler(event);
  };
}
