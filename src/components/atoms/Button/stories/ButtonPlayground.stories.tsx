import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Playground/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['playground']
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: { children: 'Clique Aqui', variant: 'primary', disabled: false },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' }
  }
};
