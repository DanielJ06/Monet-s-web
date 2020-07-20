import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import {
  Container,
  Content,
  UserAvatar,
  ActionsArea,
  ActionBtn,
  BtnText
} from './styles';

const Account: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <UserAvatar>
          <img 
            src="https://api.adorable.io/avatars/195/abott@adorable.png" 
            alt="avatar"
            />
        </UserAvatar>
        <h3>{user.name}</h3>
        <ActionsArea>
          <ActionBtn>
            <BtnText>Change password</BtnText>
          </ActionBtn>
          <ActionBtn>
            <BtnText>Change avatar</BtnText>
          </ActionBtn>
        </ActionsArea>
      </Content>
    </Container>
  );
}

export default Account;