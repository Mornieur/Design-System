import * as S from './styles';
import { Button } from '@/components/atoms/Button';

//TODO: criar testes unitários

type UserProfileProps = {
  name: string;
  role: string;
};

export const UserProfile = ({ name, role }: UserProfileProps) => {
  return (
    <S.ProfileContainer>
      <S.Avatar />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Role>{role}</S.Role>
        <Button variant="primary">Follow</Button>
      </S.Info>
    </S.ProfileContainer>
  );
};
