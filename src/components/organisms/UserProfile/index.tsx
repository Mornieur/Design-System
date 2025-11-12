import { styled } from '@stitches/react';
import { colors, space, radii, fonts } from '@/design-tokens';
import { Button } from '@/components/atoms/Button';

const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colors.background,
  padding: space[4],
  borderRadius: radii.large,
  gap: space[4]
});

const Avatar = styled('div', {
  width: '64px',
  height: '64px',
  borderRadius: radii.round,
  backgroundColor: colors.tattooInk
});

const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: space[2]
});

const Name = styled('span', {
  fontFamily: fonts.heading,
  fontSize: '16px',
  color: colors.text
});

const Role = styled('span', {
  fontFamily: fonts.body,
  fontSize: '14px',
  color: colors.secondary
});

type UserProfileProps = {
  name: string;
  role: string;
};

export const UserProfile = ({ name, role }: UserProfileProps) => {
  return (
    <ProfileContainer>
      <Avatar />
      <Info>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Button variant="primary">Follow</Button>
      </Info>
    </ProfileContainer>
  );
};
