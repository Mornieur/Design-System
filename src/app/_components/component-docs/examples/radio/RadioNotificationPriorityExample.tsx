'use client';

import Radio from '@/components/atoms/Radio';

export function RadioNotificationPriorityExample() {
  return (
    <div style={{display: 'grid', gap: '12px'}}>
      <Radio
        name="notificationPriorityExample"
        value="standard"
        label="Standard priority"
        helperText="Send the update in routine team communication."
        defaultChecked
        fullWidth
      />
      <Radio
        name="notificationPriorityExample"
        value="high"
        label="High priority"
        helperText="Interrupt the on-call channel for urgent incidents."
        fullWidth
      />
    </div>
  );
}
