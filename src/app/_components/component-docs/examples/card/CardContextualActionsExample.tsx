'use client';

import Button from '@/components/atoms/Button';
import Flex from '@/components/atoms/Flex';
import Card from '@/components/molecules/Card';

export function CardContextualActionsExample() {
  return (
    <Card style={{ width: '100%', maxWidth: '520px' }}>
      <Flex direction="column" gap={3}>
        <Flex justify="space-between" align="center" style={{ gap: '12px', flexWrap: 'wrap' }}>
          <div>
            <h4 className="example-heading">Runbook review</h4>
            <p className="example-muted-copy">
              Contextual actions can live inside a Card when they belong to the same content group.
            </p>
          </div>
          <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
            <Button type="button" variant="secondary">
              Dismiss
            </Button>
            <Button type="button">Open runbook</Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
