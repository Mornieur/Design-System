import styled from 'styled-components';
import { colors, typography, radii, space } from '@/design-tokens';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.background};
  padding: ${space[4]};
  border-radius: ${radii.large};
  gap: ${space[4]};
`;

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${radii.round};
  background-color: ${colors.background};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[2]};
`;

export const Name = styled.p`
  font-family: ${typography.heading};
  font-size: 16px;
  color: ${colors.text};
  margin: 0;
`;

export const Role = styled.p`
  font-family: ${typography.body};
  font-size: 14px;
  color: ${colors.secondary};
  margin: 0;
`;
