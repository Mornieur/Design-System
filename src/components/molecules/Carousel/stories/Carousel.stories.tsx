import type { Meta, StoryObj } from '@storybook/nextjs';
import { Carousel } from '..';

//FIXME: consertar carrossel com loop (ler doc)

const meta = {
  title: 'Molecules/Carousel',
  component: Carousel,
  parameters: { layout: 'centered' },
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
      'https://picsum.photos/600/400?random=3',

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
      'https://picsum.photos/600/400?random=3',

    ],
    width: 300,
    height: 200,
    loop: true
  }
};
