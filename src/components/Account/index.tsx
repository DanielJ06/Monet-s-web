import React, { useContext, useCallback, useState } from 'react';

import { MdExitToApp, MdEdit } from 'react-icons/md';

import UserModal from './accountModal';
import { AuthContext } from '../../context/AuthContext';

import {
  Container,
  Content,
  AvatarArea,
} from './styles';

const Account: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Container>
        <Content>
          <AvatarArea>
            <img 
              src="https://api.adorable.io/avatars/195/abott@adorable.png" 
              alt="avatar"
            />
            <h3>{user.name}</h3>
            <button onClick={handleOpenModal} style={{ border: 'none', backgroundColor: 'transparent' }} >
              <MdEdit size={21} color="#4D4646" />
            </button>
          </AvatarArea>
          <button onClick={logout} style={{ border: 'none', backgroundColor: 'transparent' }} >
            <MdExitToApp size={45} color="#4D4646" />
          </button>
        </Content>
      </Container>
      <UserModal 
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default Account;