import { useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Surface,
  colors,
  space,
  type ButtonProps,
  type CardProps,
  type SurfaceProps,
  type SurfaceVariant
} from '@feitoza-ui/core';

const cardProps: CardProps = {
  'aria-label': 'Package verification summary'
};

const surfaceProps: SurfaceProps = {
  variant: 'secondary'
};

const buttonProps: ButtonProps = {
  type: 'button',
  variant: 'primary'
};

const emphasisVariant: SurfaceVariant = 'secondary';

export default function App() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const tokenStyles = useMemo(
    () => ({
      backgroundColor: colors.backgroundAlt,
      color: colors.text,
      padding: space[6]
    }),
    []
  );

  function handleAction() {
    setClickCount((current) => current + 1);
    buttonRef.current?.focus();
  }

  return (
    <main className="app-shell">
      <Surface
        {...surfaceProps}
        ref={surfaceRef}
        className="consumer-surface"
        style={tokenStyles}
        data-variant={emphasisVariant}
      >
        <Card {...cardProps} className="consumer-card" style={{ borderColor: colors.borderStrong }}>
          <Flex direction="column" gap={4}>
            <Flex align="center" justify="space-between" gap={3} wrap="wrap">
              <Box>
                <h1>React + Vite consumer</h1>
                <p>
                  This app consumes FeitozaUI from the published-style tarball using only the
                  package root.
                </p>
              </Box>
              <Badge
                aria-label="Verification status"
                title="Public package import check"
                data-badge="verified"
              >
                Verified import
              </Badge>
            </Flex>

            <Box className="token-box" style={{ background: colors.surfaceRaised }}>
              <strong>Token check</strong>
              <p>
                Using public tokens from the package root: <code>colors.backgroundAlt</code> and
                <code> space[6]</code>.
              </p>
            </Box>

            <Flex align="center" gap={3} wrap="wrap">
              <Button
                {...buttonProps}
                ref={buttonRef}
                className="consumer-button"
                data-clicks={clickCount}
                onClick={handleAction}
              >
                Trigger action
              </Button>
              <Button type="button" variant="secondary" onClick={() => surfaceRef.current?.focus()}>
                Focus surface ref
              </Button>
            </Flex>

            <p aria-live="polite" className="event-note">
              Button clicked {clickCount} time{clickCount === 1 ? '' : 's'}.
            </p>
          </Flex>
        </Card>
      </Surface>
    </main>
  );
}
