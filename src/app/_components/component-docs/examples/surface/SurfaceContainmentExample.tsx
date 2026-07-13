'use client';

import Flex from '@/components/atoms/Flex';
import Surface from '@/components/atoms/Surface';

export function SurfaceContainmentExample() {
  return (
    <Surface style={{ padding: '16px', width: '100%', maxWidth: '420px' }}>
      <Flex direction="column" gap={3}>
        <strong>Operational grouping</strong>
        <p className="example-muted-copy">
          Surface provides containment only. Inner layout still belongs to composition.
        </p>
      </Flex>
    </Surface>
  );
}
