import type { Meta, StoryObj } from '@storybook/nextjs';
import type { ReactNode } from 'react';
import Field from '..';
import Input from '../../Input';
import Select from '../../Select';
import Textarea from '../../Textarea';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Field',
  component: Field.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Field provides the shared form anatomy for textual controls in FeitozaUI. It centralizes label, helper text, error text, invalid, required, and layout concerns without forcing the same structure onto selection controls yet.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Field.Root>;

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

export const InputComposition: Story = {
  render: () => (
    <Surface>
      <Field.Root required fullWidth>
        <Field.Label>API key alias</Field.Label>
        <Input placeholder="billing-readonly" />
        <Field.HelperText>The label and helper text are managed by Field.</Field.HelperText>
      </Field.Root>
    </Surface>
  )
};

export const ErrorState: Story = {
  render: () => (
    <Surface>
      <Field.Root invalid fullWidth>
        <Field.Label>Workspace slug</Field.Label>
        <Input defaultValue="feitoza ui" />
        <Field.HelperText>Use lowercase letters, numbers, and hyphens.</Field.HelperText>
        <Field.ErrorText>Only lowercase letters are allowed.</Field.ErrorText>
      </Field.Root>
    </Surface>
  )
};

export const MixedControls: Story = {
  render: () => (
    <Surface width={560}>
      <div style={{ display: 'grid', gap: space[4] }}>
        <Field.Root fullWidth>
          <Field.Label>Environment</Field.Label>
          <Select defaultValue="production">
            <option value="development">Development</option>
            <option value="production">Production</option>
          </Select>
          <Field.HelperText>Textual controls can share the same field anatomy.</Field.HelperText>
        </Field.Root>
        <Field.Root optionalLabel="Optional" fullWidth>
          <Field.Label>Release notes</Field.Label>
          <Textarea placeholder="Summarize the rollout context..." />
        </Field.Root>
      </div>
    </Surface>
  )
};
