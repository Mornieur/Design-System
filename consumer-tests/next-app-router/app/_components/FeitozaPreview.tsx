'use client';

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
  type SurfaceVariant
} from '@feitoza-ui/core';

const validatedVariant: SurfaceVariant = 'secondary';

export default function FeitozaPreview() {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [checked, setChecked] = useState(false);

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

          <Checkbox
            ref={checkboxRef}
            name="nextReleaseNotes"
            value="enabled"
            checked={checked}
            onChange={(event) => {
              setChecked(event.target.checked);
              checkboxRef.current?.focus();
            }}
            label="Receive release notes in this client island"
            helperText="Verifies package-root import, client rendering, ref forwarding, and native events."
            fullWidth
          />

          <Flex align="center" gap={3} wrap="wrap">
            <button type="button" onClick={() => setChecked(false)}>
              Clear state
            </button>
            <button type="button" onClick={() => cardRef.current?.focus()}>
              Focus card ref
            </button>
          </Flex>

          <p aria-live="polite" style={{ margin: 0 }}>
            Checkbox is {checked ? 'checked' : 'unchecked'}.
          </p>
        </Flex>
      </Card>
    </Surface>
  );
}
