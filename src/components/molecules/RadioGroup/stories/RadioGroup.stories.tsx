import type {Meta, StoryObj} from '@storybook/nextjs';
import {expect} from 'storybook/test';
import Radio from '@/components/atoms/Radio';
import {semanticColors, space, typography} from '@/design-tokens';
import RadioGroup from '..';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'RadioGroup is the FeitozaUI composition primitive for grouped radio choices. It keeps real fieldset and legend semantics, leaves name and state ownership on the radios, and adds shared helper or error messaging at the group level.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    legend: {control: 'text'},
    helperText: {control: 'text'},
    errorMessage: {control: 'text'},
    disabled: {control: 'boolean'},
    invalid: {control: 'boolean'},
    orientation: {control: 'radio', options: ['vertical', 'horizontal']}
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({children, width = 560}: {children: React.ReactNode; width?: number}) => (
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
    legend: 'Release channel'
  },
  render: () => (
    <Surface>
      <RadioGroup legend="Release channel">
        <Radio name="releaseChannel" value="email" label="Email" defaultChecked />
        <Radio name="releaseChannel" value="slack" label="Slack" />
      </RadioGroup>
    </Surface>
  )
};

export const Horizontal: Story = {
  args: {
    legend: 'Notification priority'
  },
  render: () => (
    <Surface>
      <RadioGroup legend="Notification priority" orientation="horizontal">
        <Radio name="notificationPriority" value="standard" label="Standard" defaultChecked />
        <Radio name="notificationPriority" value="high" label="High" />
        <Radio name="notificationPriority" value="urgent" label="Urgent" />
      </RadioGroup>
    </Surface>
  )
};

export const WithHelperText: Story = {
  args: {
    legend: 'Delivery channel'
  },
  render: () => (
    <Surface>
      <RadioGroup
        legend="Delivery channel"
        helperText="Keep the same name on the radios so the browser preserves exclusivity and form submission."
      >
        <Radio name="deliveryChannel" value="email" label="Email" defaultChecked />
        <Radio name="deliveryChannel" value="slack" label="Slack" />
      </RadioGroup>
    </Surface>
  )
};

export const Invalid: Story = {
  args: {
    legend: 'Account plan'
  },
  render: () => (
    <Surface>
      <RadioGroup
        legend="Account plan"
        invalid
        errorMessage="Select one account plan before continuing."
      >
        <Radio name="accountPlan" value="starter" label="Starter" />
        <Radio name="accountPlan" value="growth" label="Growth" />
        <Radio name="accountPlan" value="scale" label="Scale" />
      </RadioGroup>
    </Surface>
  ),
  play: async ({canvas}) => {
    const group = canvas.getByRole('group', {name: 'Account plan'});

    await expect(group).toHaveAttribute('aria-invalid', 'true');
    await expect(group).toHaveAccessibleDescription(
      'Select one account plan before continuing.'
    );
  }
};

export const Disabled: Story = {
  args: {
    legend: 'Incident route'
  },
  render: () => (
    <Surface>
      <RadioGroup
        legend="Incident route"
        helperText="This route is temporarily locked while the rollout window is frozen."
        disabled
      >
        <Radio name="incidentRoute" value="ops" label="Operations" defaultChecked />
        <Radio name="incidentRoute" value="security" label="Security" />
      </RadioGroup>
    </Surface>
  )
};

export const Required: Story = {
  args: {
    legend: 'Approval path'
  },
  render: () => (
    <Surface>
      <RadioGroup
        legend="Approval path"
        helperText="Mark the radios themselves as required when the form cannot be submitted without a selection."
      >
        <Radio name="approvalPath" value="engineering" label="Engineering" required />
        <Radio name="approvalPath" value="compliance" label="Compliance" required />
      </RadioGroup>
    </Surface>
  )
};

export const AccountPlanSelection: Story = {
  args: {
    legend: 'Account plan'
  },
  render: () => (
    <Surface>
      <RadioGroup
        legend="Account plan"
        helperText="Use the plan labels to set expectations before the person submits the form."
      >
        <Radio
          name="storyPlanSelection"
          value="starter"
          label="Starter"
          helperText="Core components for teams validating the platform."
          defaultChecked
        />
        <Radio
          name="storyPlanSelection"
          value="growth"
          label="Growth"
          helperText="Adds migration support and broader rollout coordination."
        />
        <Radio
          name="storyPlanSelection"
          value="scale"
          label="Scale"
          helperText="Best for multi-team adoption with formal governance."
        />
      </RadioGroup>
    </Surface>
  )
};

export const NotificationPriority: Story = {
  args: {
    legend: 'Notification priority'
  },
  render: () => (
    <Surface>
      <RadioGroup
        legend="Notification priority"
        orientation="horizontal"
        helperText="Orientation is visual only. The radios still rely on native browser behavior."
      >
        <Radio
          name="storyNotificationPriority"
          value="standard"
          label="Standard"
          helperText="Routine product updates and recap messages."
          defaultChecked
        />
        <Radio
          name="storyNotificationPriority"
          value="high"
          label="High"
          helperText="Urgent delivery that should interrupt the team channel."
        />
      </RadioGroup>
    </Surface>
  )
};

export const UsageGuidance: Story = {
  args: {
    legend: 'Release channel'
  },
  render: () => (
    <Surface width={620}>
      <div style={{display: 'grid', gap: space[4]}}>
        <RadioGroup
          legend="Release channel"
          helperText="RadioGroup organizes the shared legend, help, and error message. Each Radio still owns its own name, value, checked state, and native form behavior."
        >
          <Radio name="usageGuidanceChannel" value="email" label="Email" defaultChecked />
          <Radio name="usageGuidanceChannel" value="slack" label="Slack" />
        </RadioGroup>
      </div>
    </Surface>
  ),
  play: async ({canvas}) => {
    await expect(canvas.getByRole('group', {name: 'Release channel'})).toHaveAccessibleDescription(
      'RadioGroup organizes the shared legend, help, and error message. Each Radio still owns its own name, value, checked state, and native form behavior.'
    );
  }
};
