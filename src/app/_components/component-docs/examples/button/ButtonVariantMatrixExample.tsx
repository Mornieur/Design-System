'use client';

import Button from '@/components/atoms/Button';

export function ButtonVariantMatrixExample() {
  return (
    <div className="example-inline-group">
      <Button type="button" variant="primary">
        Primary action
      </Button>
      <Button type="button" variant="secondary">
        Secondary action
      </Button>
      <Button type="button" variant="accent">
        Accent moment
      </Button>
    </div>
  );
}
