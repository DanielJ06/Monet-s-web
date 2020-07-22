import React, { useContext, useCallback } from 'react';

import { Modal } from "react-responsive-modal";
import { FiSettings, FiUser, FiMail } from 'react-icons/fi';

import { AuthContext } from '../../../context/AuthContext';
import Input from '../../Input';

import { 
  Container,
  Header,
  Content,
  Button,
} from './styles';

interface UserModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const AccountModal: React.FC<UserModalProps> = ({ isModalOpen, handleCloseModal }) => {
  const { user, token } = useContext(AuthContext);

  const handleUpdateUserAndCloseModal = useCallback((id: number) => {
    //handleUpdateUser(id);
    handleCloseModal();
  }, [handleCloseModal]);

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Container>
        <Header>
          <FiSettings style={{ marginRight: 5 }} size={21} />
          <h3>Your Account</h3>
        </Header>

        <Content>
          <img 
            src="https://api.adorable.io/avatars/195/abott@adorable.png" 
            alt="avatar"
          />
          <Input
            value={ user.name }
            name="Name"
            icon={FiUser}
          />
          <Input 
            value={ user.email }
            name="Email"
            icon={FiMail}
          />
          <Button type="submit">Update</Button>
        </Content>
      </Container>
    </Modal>
  )
}

export default AccountModal;