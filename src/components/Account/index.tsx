import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import {
  Container,
  Content,
} from './styles';

const Account: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Content>
          <img 
            src="https://api.adorable.io/avatars/195/abott@adorable.png" 
            alt="avatar"
            />
        <h3>{user.name}</h3>
      </Content>
    </Container>
  );
}

export default Account;