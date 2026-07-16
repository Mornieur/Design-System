'use client';

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
  type SurfaceVariant
} from '@feitoza-ui/core';

const validatedVariant: SurfaceVariant = 'secondary';

export default function FeitozaPreview() {
  const radioRef = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<'email' | 'slack'>('email');

  const surfaceStyle = useMemo(
    () => ({
      backgroundColor: colors.backgroundAlt,
      color: colors.text,
      padding: space[6]
    }),
    []
  );

  return (
    <Surface
      variant={validatedVariant}
      style={surfaceStyle}
      data-consumer="next-app-router"
      aria-label="Next client island preview"
    >
      <Card ref={cardRef} style={{ borderColor: colors.borderStrong }}>
        <Flex direction="column" gap={4}>
          <Flex justify="space-between" align="center" gap={3} wrap="wrap">
            <Box>
              <h2 style={{ margin: '0 0 8px' }}>Client island package root import</h2>
              <p style={{ margin: 0 }}>
                The client island imports <code>@feitoza-ui/core</code> directly while the page
                stays server-rendered.
              </p>
            </Box>
            <Badge title="Client island verified">Client island verified</Badge>
          </Flex>

          <Radio
            ref={radioRef}
            name="nextReleaseChannel"
            value="email"
            checked={selectedChannel === 'email'}
            onChange={(event) => {
              setSelectedChannel(event.target.value as 'email' | 'slack');
              radioRef.current?.focus();
            }}
            label="Email release channel in this client island"
            helperText="Verifies package-root import, client rendering, ref forwarding, and native events."
            fullWidth
          />
          <Radio
            name="nextReleaseChannel"
            value="slack"
            checked={selectedChannel === 'slack'}
            onChange={(event) => {
              setSelectedChannel(event.target.value as 'email' | 'slack');
            }}
            label="Slack release channel in this client island"
            helperText="Useful for immediate coordination during rollout windows."
            fullWidth
          />

          <Flex align="center" gap={3} wrap="wrap">
            <button type="button" onClick={() => setSelectedChannel('email')}>
              Reset to email
            </button>
            <button type="button" onClick={() => cardRef.current?.focus()}>
              Focus card ref
            </button>
          </Flex>

          <p aria-live="polite" style={{ margin: 0 }}>
            Selected channel: {selectedChannel}.
          </p>
        </Flex>
      </Card>
    </Surface>
  );
}
