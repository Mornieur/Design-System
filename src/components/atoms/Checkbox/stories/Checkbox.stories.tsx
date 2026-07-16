import Checkbox from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { useState, type ReactNode } from 'react';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Checkbox is the native multi-selection control for FeitozaUI. It keeps real checkbox semantics, supports visible labels and associated helper or error text, and exposes an indeterminate state for partial selection flows.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    fullWidth: { control: 'boolean' }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children, width = 420 }: { children: ReactNode; width?: number }) => (
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

export const Default: Story = {
  args: {
    label: 'Email me about platform updates'
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email me about platform updates')).not.toBeChecked();
  }
};

export const Checked: Story = {
  args: {
    label: 'Send weekly release notes',
    defaultChecked: true
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Send weekly release notes')).toBeChecked();
  }
};

export const HelperText: Story = {
  args: {
    label: 'Operational alerts',
    helperText: 'Send deploy, incident, and rollback notifications to this user.'
  }
};

export const Error: Story = {
  args: {
    label: 'Accept the launch checklist',
    errorMessage: 'You must accept the launch checklist before continuing.'
  },

  play: async ({ canvas }) => {
    const checkbox = canvas.getByLabelText('Accept the launch checklist');

    await expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    await expect(checkbox).toHaveAccessibleDescription(
      'You must accept the launch checklist before continuing.'
    );
  }
};

export const InvalidWithoutErrorMessage: Story = {
  args: {
    label: 'Enable external access',
    invalid: true,
    helperText: 'This option is blocked until the approval policy is reviewed.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Legacy notification channel',
    defaultChecked: true,
    disabled: true
  }
};

export const Required: Story = {
  args: {
    label: 'I understand the production impact',
    required: true
  }
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all environments',
    indeterminate: true,
    helperText: 'Some, but not all, child environments are currently selected.'
  }
};

export const FullWidth: Story = {
  render: () => (
    <Surface width={560}>
      <Checkbox
        label="Notify the entire on-call rotation"
        helperText="The control stretches with the surrounding form layout."
        fullWidth
      />
    </Surface>
  )
};

export const ControlledState: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Surface>
        <Checkbox
          label="Auto-assign follow-up tasks"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          helperText={checked ? 'Follow-up tasks will be created automatically.' : 'Disabled'}
          fullWidth
        />
      </Surface>
    );
  }
};

export const GroupExample: Story = {
  render: () => (
    <Surface width={520}>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Checkbox
          label="Product updates"
          defaultChecked
          helperText="Major releases, changelogs, and migration notes."
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
    </Surface>
  )
};

export const AccessibilityExample: Story = {
  render: () => (
    <Surface>
      <Checkbox
        id="accessibility-incident-updates"
        label="Receive incident updates"
        name="incidentUpdates"
        helperText="The label, helper text, and native checkbox semantics stay connected."
      />
    </Surface>
  ),

  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();

    const checkbox = canvas.getByLabelText('Receive incident updates');

    await expect(checkbox).toHaveFocus();
    await expect(checkbox).toHaveAccessibleDescription(
      'The label, helper text, and native checkbox semantics stay connected.'
    );
  }
};
