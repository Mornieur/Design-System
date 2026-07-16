'use client';

import Checkbox from '@/components/atoms/Checkbox';

export function CheckboxIndeterminateSelectionExample() {
  return (
    <div style={{display: 'grid', gap: '12px'}}>
      <Checkbox
        label="Select all environments"
        indeterminate
        helperText="Some, but not all, child environments are currently selected."
        fullWidth
      />
      <Checkbox label="Production" defaultChecked fullWidth />
      <Checkbox label="Staging" defaultChecked fullWidth />
      <Checkbox label="Development" fullWidth />
    </div>
  );
}
