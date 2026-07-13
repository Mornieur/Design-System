'use client';

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
  type SurfaceVariant
} from '@feitoza-ui/core';

const validatedVariant: SurfaceVariant = 'secondary';

export default function FeitozaPreview() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [clickCount, setClickCount] = useState(0);

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

          <Flex align="center" gap={3} wrap="wrap">
            <Button
              ref={buttonRef}
              type="button"
              onClick={() => {
                setClickCount((current) => current + 1);
                buttonRef.current?.focus();
              }}
            >
              Trigger island action
            </Button>
            <Button type="button" variant="secondary" onClick={() => cardRef.current?.focus()}>
              Focus card ref
            </Button>
          </Flex>

          <p aria-live="polite" style={{ margin: 0 }}>
            Button clicked {clickCount} time{clickCount === 1 ? '' : 's'}.
          </p>
        </Flex>
      </Card>
    </Surface>
  );
}
