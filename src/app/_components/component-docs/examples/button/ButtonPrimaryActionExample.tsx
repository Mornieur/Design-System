'use client';

import Button from '@/components/atoms/Button';

export function ButtonPrimaryActionExample() {
  return (
    <div className="example-inline-group">
      <Button type="button">Deploy service</Button>
      <Button type="button" variant="secondary">
        Review diff
      </Button>
    </div>
  );
}
