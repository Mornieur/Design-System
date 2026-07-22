'use client';

import Radio from '@/components/atoms/Radio';
import RadioGroup from '@/components/molecules/RadioGroup';

export function RadioGroupUsageGuidanceExample() {
  return (
    <RadioGroup
      legend="Release channel"
      helperText="RadioGroup centralizes legend and helper messaging. Each Radio still owns name, value, checked state, and form behavior."
    >
      <Radio name="usageGuidanceChannelExample" value="email" label="Email" defaultChecked />
      <Radio name="usageGuidanceChannelExample" value="slack" label="Slack" />
    </RadioGroup>
  );
}
