import type { Meta, StoryObj } from '@storybook/nextjs';
import { Carousel } from '..';

const meta = {
  title: 'Internal/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Carousel is currently internal and is not part of the public package API. It needs a dedicated accessibility and interaction review before promotion.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
    width: { control: 'number' },
    height: { control: 'number' },
    loop: { control: 'boolean' }
  }
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      'https://picsum.photos/600/400?random=1',
      'https://picsum.photos/600/400?random=2',
      'https://picsum.photos/600/400?random=3'
    ],
    width: 260,
    height: 260,
    loop: false
  }
};

export const Looping: Story = {
  args: {
    images: [
      'https://picsum.photos/600/400?random=1',
      'https://picsum.photos/600/400?random=2',
      'https://picsum.photos/600/400?random=3'
    ],
    width: 300,
    height: 200,
    loop: true
  }
};
