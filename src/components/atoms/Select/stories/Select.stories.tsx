import Select from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { useState, type ReactNode } from 'react';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Select is a native select translated from the Figma Make Select reference. The closed field follows the FeitozaUI form language; the opened menu remains controlled by the browser and operating system for native accessibility.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] }
  }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children, width = 360 }: { children: ReactNode; width?: number }) => (
  <div
    style={{
      width,
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

const EnvironmentOptions = () => (
  <>
    <option value="development">Development</option>
    <option value="staging">Staging</option>
    <option value="production">Production</option>
  </>
);

export const Default: Story = {
  args: {
    defaultValue: 'production',
    children: <EnvironmentOptions />
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toHaveValue('production');
  }
};

export const WithLabel: Story = {
  args: {
    label: 'Environment',
    defaultValue: 'staging',
    children: <EnvironmentOptions />
  }
};

export const Placeholder: Story = {
  args: {
    label: 'Environment',
    placeholder: 'Select an environment',
    children: <EnvironmentOptions />
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Environment')).toHaveValue('');
  }
};

export const HelperText: Story = {
  args: {
    label: 'Deployment region',
    helperText: 'Choose the region closest to the active traffic source.',
    defaultValue: 'us-east-1',
    children: (
      <>
        <option value="us-east-1">US East 1</option>
        <option value="us-west-2">US West 2</option>
        <option value="eu-west-1">EU West 1</option>
      </>
    )
  }
};

export const Error: Story = {
  args: {
    label: 'Approval policy',
    placeholder: 'Select a policy',
    errorMessage: 'A policy is required before deployment.',
    children: (
      <>
        <option value="standard">Standard approval</option>
        <option value="emergency">Emergency change</option>
      </>
    )
  },

  play: async ({ canvas }) => {
    const select = canvas.getByLabelText('Approval policy');

    await expect(select).toHaveAttribute('aria-invalid', 'true');
    await expect(select).toHaveAccessibleDescription('A policy is required before deployment.');
  }
};

export const InvalidWithoutErrorMessage: Story = {
  args: {
    label: 'Runtime',
    invalid: true,
    helperText: 'The selected runtime is under review.',
    defaultValue: 'node',
    children: (
      <>
        <option value="node">Node.js</option>
        <option value="edge">Edge runtime</option>
      </>
    )
  }
};

export const Disabled: Story = {
  args: {
    label: 'Archived environment',
    defaultValue: 'legacy',
    disabled: true,
    children: (
      <>
        <option value="legacy">Legacy production</option>
        <option value="production">Production</option>
      </>
    )
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Archived environment')).toBeDisabled();
  }
};

export const Required: Story = {
  args: {
    label: 'Release channel',
    placeholder: 'Select a channel',
    required: true,
    children: (
      <>
        <option value="stable">Stable</option>
        <option value="canary">Canary</option>
      </>
    )
  }
};

export const Sizes: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Select label="Small" size="sm" defaultValue="development" fullWidth>
          <EnvironmentOptions />
        </Select>
        <Select label="Medium" size="md" defaultValue="staging" fullWidth>
          <EnvironmentOptions />
        </Select>
        <Select label="Large" size="lg" defaultValue="production" fullWidth>
          <EnvironmentOptions />
        </Select>
      </div>
    </Surface>
  )
};

export const FullWidth: Story = {
  render: () => (
    <Surface width={560}>
      <Select
        label="Service owner"
        helperText="The field expands to the width of its parent."
        defaultValue="platform"
        fullWidth
      >
        <option value="platform">Platform Engineering</option>
        <option value="payments">Payments</option>
        <option value="security">Security</option>
      </Select>
    </Surface>
  )
};

export const ControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState('staging');

    return (
      <Surface>
        <Select
          label="Target environment"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText={`Selected value: ${value}`}
          fullWidth
        >
          <EnvironmentOptions />
        </Select>
      </Surface>
    );
  }
};

export const WithOptgroup: Story = {
  args: {
    label: 'Region',
    defaultValue: 'us-east-1',
    children: (
      <>
        <optgroup label="United States">
          <option value="us-east-1">US East 1</option>
          <option value="us-west-2">US West 2</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="eu-west-1">EU West 1</option>
          <option value="eu-central-1">EU Central 1</option>
        </optgroup>
      </>
    )
  }
};

export const HelperAndError: Story = {
  args: {
    label: 'Change category',
    helperText: 'This controls routing for approvals and audit logs.',
    errorMessage: 'Select the category that best matches the change.',
    placeholder: 'Select a category',
    children: (
      <>
        <option value="infrastructure">Infrastructure</option>
        <option value="application">Application</option>
      </>
    )
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Change category')).toHaveAccessibleDescription(
      'This controls routing for approvals and audit logs. Select the category that best matches the change.'
    );
  }
};

export const LongOption: Story = {
  render: () => (
    <Surface width={420}>
      <Select label="Runbook" defaultValue="database" fullWidth>
        <option value="database">
          Database failover procedure for regional outage response
        </option>
        <option value="cache">Cache invalidation and warm-up sequence</option>
        <option value="queue">Message queue drain and replay procedure</option>
      </Select>
    </Surface>
  )
};
