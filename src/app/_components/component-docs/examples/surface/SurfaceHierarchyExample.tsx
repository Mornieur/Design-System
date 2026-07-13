'use client';

import Flex from '@/components/atoms/Flex';
import Surface from '@/components/atoms/Surface';

export function SurfaceHierarchyExample() {
  return (
    <Surface style={{ padding: '16px', width: '100%', maxWidth: '460px' }}>
      <Flex direction="column" gap={3}>
        <strong>Primary section</strong>
        <Surface variant="secondary" style={{ padding: '12px' }}>
          <Flex direction="column" gap={2}>
            <strong>Secondary grouping</strong>
            <p className="example-muted-copy">
              Nest surfaces only when hierarchy is explicit and supports reading order.
            </p>
          </Flex>
        </Surface>
      </Flex>
    </Surface>
  );
}
