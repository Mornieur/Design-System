import { Meta, StoryFn } from '@storybook/react';
import { Card } from '..';

export default {
  title: 'Molecules/Card',
  component: Card
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  children: 'This is some content inside the card.'
};
