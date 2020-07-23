import React, { useContext } from 'react';

import { Formik } from 'formik';
import { Modal } from "react-responsive-modal";
import { FiSettings, FiUser, FiMail, FiLock } from 'react-icons/fi';

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
  const { user, updateUser } = useContext(AuthContext); 

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Container>
        <Header>
          <FiSettings style={{ marginRight: 5 }} size={21} />
          <h3>Your Account</h3>
        </Header>

        <Formik
          initialValues={{ 
            name: user.name, 
            email: user.email,
            oldPassword: '',
            password: '',
          }}
          onSubmit={(values) => {
            updateUser(values)
        }}>
          {(props) => (
            <Content>
              <img 
                src="https://api.adorable.io/avatars/195/abott@adorable.png" 
                alt="avatar"
              />
              <form onSubmit={props.handleSubmit}>
                <Input
                  name="name"
                  icon={FiUser}
                  value={props.values.name}
                  onChange={props.handleChange('name')}
                />
                <Input 
                  name="email"
                  icon={FiMail}
                  value={props.values.email}
                  disabled={true}
                  style={{ cursor: "not-allowed" }}
                />
                <Input
                  name="oldPassword"
                  placeholder="old password"
                  icon={FiLock}
                  value={props.values.oldPassword}
                  onChange={props.handleChange('oldPassword')}
                  type="password"
                />
                <Input 
                  name="password"
                  placeholder="new password"
                  icon={FiLock}
                  value={props.values.password}
                  onChange={props.handleChange('password')}
                  type="password"
                />
                <Button type="submit">Update</Button>
              </form>
            </Content>
          )}
        </Formik>
      </Container>
    </Modal>
  )
}

export default AccountModal;