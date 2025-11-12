import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '..';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary']
    },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Clique Aqui', variant: 'primary' }
};

export const Secondary: Story = {
  args: { children: 'Cancelar', variant: 'secondary' }
};
