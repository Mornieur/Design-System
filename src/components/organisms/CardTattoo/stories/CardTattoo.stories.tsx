import type { Meta, StoryObj } from '@storybook/nextjs';
import { CardTattoo } from '..';

//FIXME: consertar carrossel com card

const meta = {
  title: 'Organisms/CardTattoo',
  component: CardTattoo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    images: { control: 'object' },
    description: { control: 'text' }
  }
} satisfies Meta<typeof CardTattoo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Fine Line Flower',
    images: [
      'https://picsum.photos/300/300?random=1',
      'https://picsum.photos/300/300?random=2',
      'https://picsum.photos/300/300?random=3',

    ],
    description: 'Minimalist flower tattoo made using fine line technique.'
  }
};

export const MultipleCards: Story = {
  args: { title: '', images: [], description: '' },
  render: () => (
    <div style={{ display: 'flex', gap: 20 }}>
      <CardTattoo
        title="Dragon Linework"
        images={['https://picsum.photos/300/300?random=4']}
        description="Detailed dragon linework tattoo."
      />

      <CardTattoo
        title="Butterfly"
        images={['https://picsum.photos/300/300?random=5', 'https://picsum.photos/300/300?random=6']}
      />
    </div>
  )
};
