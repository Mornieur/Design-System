'use client';

import Radio from '@/components/atoms/Radio';
import RadioGroup from '@/components/molecules/RadioGroup';

export function RadioGroupAccountPlanSelectionExample() {
  return (
    <RadioGroup
      legend="Account plan"
      helperText="Use the plan labels to describe scope before the form is submitted."
    >
      <Radio
        name="accountPlanExample"
        value="starter"
        label="Starter"
        helperText="Core components for teams validating the platform."
        defaultChecked
      />
      <Radio
        name="accountPlanExample"
        value="growth"
        label="Growth"
        helperText="Broader rollout support for growing product teams."
      />
      <Radio
        name="accountPlanExample"
        value="scale"
        label="Scale"
        helperText="Best for multi-team adoption with governance requirements."
      />
    </RadioGroup>
  );
}
