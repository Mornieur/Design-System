import { Meta, StoryFn } from '@storybook/nextjs';
import { UserProfile } from '..';

export default {
  title: 'Organisms/UserProfile',
  component: UserProfile
} as Meta<typeof UserProfile>;

const Template: StoryFn<typeof UserProfile> = (args) => (
  <UserProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Ayumi',
  role: 'Tatuadora'
};
