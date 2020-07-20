import React, { useContext } from 'react';

import { MdExitToApp, MdEdit } from 'react-icons/md';

import { AuthContext } from '../../context/AuthContext';

import {
  Container,
  Content,
  AvatarArea,
} from './styles';

const Account: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <AvatarArea>
          <img 
            src="https://api.adorable.io/avatars/195/abott@adorable.png" 
            alt="avatar"
          />
          <h3>{user.name}</h3>
          <MdEdit size={21} color="#4D4646" />
        </AvatarArea>
        <button onClick={logout} style={{ border: 'none', backgroundColor: 'transparent' }} >
          <MdExitToApp size={45} color="#4D4646" />
        </button>
      </Content>
    </Container>
  );
}

export default Account;