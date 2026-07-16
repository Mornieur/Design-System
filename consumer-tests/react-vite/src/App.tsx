import { useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Card,
  Flex,
  Radio,
  Surface,
  colors,
  space,
  type CardProps,
  type RadioProps,
  type SurfaceProps,
  type SurfaceVariant
} from '@feitoza-ui/core';

const cardProps: CardProps = {
  'aria-label': 'Package verification summary'
};

const surfaceProps: SurfaceProps = {
  variant: 'secondary'
};

const radioProps: RadioProps = {
  name: 'releaseChannel',
  helperText: 'Validates package-root import, native event flow, and forwarded refs.'
};

const emphasisVariant: SurfaceVariant = 'secondary';

export default function App() {
  const radioRef = useRef<HTMLInputElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<'email' | 'slack'>('email');

  const tokenStyles = useMemo(
    () => ({
      backgroundColor: colors.backgroundAlt,
      color: colors.text,
      padding: space[6]
    }),
    []
  );

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedChannel(event.target.value as 'email' | 'slack');
    radioRef.current?.focus();
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
              <Radio
                {...radioProps}
                ref={radioRef}
                className="consumer-radio"
                value="email"
                checked={selectedChannel === 'email'}
                onChange={handleRadioChange}
                label="Email release channel"
                data-state={selectedChannel === 'email' ? 'checked' : 'unchecked'}
                fullWidth
              />
              <Radio
                {...radioProps}
                value="slack"
                checked={selectedChannel === 'slack'}
                onChange={handleRadioChange}
                label="Slack release channel"
                helperText="Useful for immediate coordination during rollout windows."
                data-state={selectedChannel === 'slack' ? 'checked' : 'unchecked'}
                fullWidth
              />
              <Flex align="center" gap={3} wrap="wrap">
                <button type="reset" onClick={() => setSelectedChannel('email')}>
                  Reset local state
                </button>
                <button type="button" onClick={() => surfaceRef.current?.focus()}>
                  Focus surface ref
                </button>
              </Flex>
            </form>

            <p aria-live="polite" className="event-note">
              Selected channel: {selectedChannel}.
            </p>
          </Flex>
        </Card>
      </Surface>
    </main>
  );
}
