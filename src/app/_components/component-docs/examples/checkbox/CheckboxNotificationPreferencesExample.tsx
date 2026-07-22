'use client';

import Checkbox from '@/components/atoms/Checkbox';

export function CheckboxNotificationPreferencesExample() {
  return (
    <div style={{display: 'grid', gap: '12px'}}>
      <Checkbox
        label="Product updates"
        helperText="Major releases, changelogs, and migration notes."
        defaultChecked
        fullWidth
      />
      <Checkbox
        label="Security advisories"
        helperText="Urgent security notices and required follow-up."
        fullWidth
      />
      <Checkbox
        label="Operational digests"
        helperText="Weekly summaries for incidents and deployment activity."
        fullWidth
      />
    </div>
  );
}
