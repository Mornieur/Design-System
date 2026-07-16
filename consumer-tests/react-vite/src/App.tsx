import { useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Card,
  Checkbox,
  Flex,
  Surface,
  colors,
  space,
  type CheckboxProps,
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

const checkboxProps: CheckboxProps = {
  name: 'releaseNotes',
  value: 'weekly-digest',
  helperText: 'Validates package-root import, native event flow, and forwarded refs.'
};

const emphasisVariant: SurfaceVariant = 'secondary';

export default function App() {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const [checked, setChecked] = useState(false);

  const tokenStyles = useMemo(
    () => ({
      backgroundColor: colors.backgroundAlt,
      color: colors.text,
      padding: space[6]
    }),
    []
  );

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
    checkboxRef.current?.focus();
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

            <form
              onSubmit={(event) => event.preventDefault()}
              style={{ display: 'grid', gap: space[3] }}
            >
              <Checkbox
                {...checkboxProps}
                ref={checkboxRef}
                className="consumer-checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                label="Receive weekly release notes"
                data-state={checked ? 'checked' : 'unchecked'}
                fullWidth
              />
              <Flex align="center" gap={3} wrap="wrap">
                <button type="reset" onClick={() => setChecked(false)}>
                  Reset local state
                </button>
                <button type="button" onClick={() => surfaceRef.current?.focus()}>
                  Focus surface ref
                </button>
              </Flex>
            </form>

            <p aria-live="polite" className="event-note">
              Checkbox is {checked ? 'checked' : 'unchecked'}.
            </p>
          </Flex>
        </Card>
      </Surface>
    </main>
  );
}
