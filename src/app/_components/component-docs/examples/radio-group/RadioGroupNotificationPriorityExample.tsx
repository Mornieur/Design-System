'use client';

import Radio from '@/components/atoms/Radio';
import RadioGroup from '@/components/molecules/RadioGroup';

export function RadioGroupNotificationPriorityExample() {
  return (
    <RadioGroup
      legend="Notification priority"
      orientation="horizontal"
      helperText="Orientation is visual only. Native keyboard and exclusivity stay on the radios."
    >
      <Radio
        name="notificationPriorityGroupExample"
        value="standard"
        label="Standard"
        helperText="Routine release updates and recap messages."
        defaultChecked
      />
      <Radio
        name="notificationPriorityGroupExample"
        value="high"
        label="High"
        helperText="Interrupt the team channel for urgent release coordination."
      />
    </RadioGroup>
  );
}
