'use client';

import Radio from '@/components/atoms/Radio';

export function RadioReleaseChannelSelectionExample() {
  return (
    <div style={{display: 'grid', gap: '12px'}}>
      <Radio
        name="releaseChannelExample"
        value="email"
        label="Email"
        helperText="Best for release recaps and migration notes."
        defaultChecked
        fullWidth
      />
      <Radio
        name="releaseChannelExample"
        value="slack"
        label="Slack"
        helperText="Best for rapid team coordination during rollout windows."
        fullWidth
      />
      <Radio
        name="releaseChannelExample"
        value="pager"
        label="Pager"
        helperText="Reserve for urgent operational escalation."
        fullWidth
      />
    </div>
  );
}
