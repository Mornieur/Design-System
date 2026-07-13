'use client';

import Card from '@/components/molecules/Card';
import Divider from '@/components/atoms/Divider';
import Flex from '@/components/atoms/Flex';

export function CardRelatedContentExample() {
  return (
    <Card style={{ width: '100%', maxWidth: '460px' }}>
      <Flex direction="column" gap={3}>
        <div>
          <h4 className="example-heading">Queue health</h4>
          <p className="example-muted-copy">
            Related operational status and supporting metrics belong together in a predictable
            reading rhythm.
          </p>
        </div>

        <Divider />

        <Flex justify="space-between" align="center">
          <span>Mean acknowledgment</span>
          <span className="example-mono-copy">04m 12s</span>
        </Flex>
      </Flex>
    </Card>
  );
}
