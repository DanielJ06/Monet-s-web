import React, { useContext } from 'react';

import { Formik } from 'formik';
import { Modal } from "react-responsive-modal";
import { FiArchive, FiTag, FiDollarSign } from 'react-icons/fi';

import { AuthContext } from '../../../context/AuthContext';
import { WalletContext } from '../../../context/WalletContext';
import Input from '../../Input';

import { 
  Container,
  Header,
  Content,
  Button,
  SelectType,
} from './styles';
import api from '../../../services/api';

interface UserModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const AccountModal: React.FC<UserModalProps> = ({ isModalOpen, handleCloseModal }) => {
  const { token } = useContext(AuthContext);
  const { wallet } = useContext(WalletContext);

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Container>
        <Header>
          <FiArchive style={{ marginRight: 5 }} size={21} />
          <h3>Add Transaction</h3>
        </Header>

        <Formik
          initialValues={{ 
            title: '', 
            value: 0,
            type: 'withdraw',
            wallet_id: wallet.id,
          }}
          onSubmit={ async (values) => {
            try {
              const config = {
                headers: { Authorization: `Bearer ${token}` }
              };
              await api.post('transaction', values, config)
              handleCloseModal()
            } catch (err) {
              console.error(err)
            }
        }}>
          {(props) => (
            <Content>
              <form onSubmit={props.handleSubmit}>
                <Input
                  name="title"
                  placeholder="Ex: IPVA"
                  icon={FiTag}
                  value={props.values.title}
                  onChange={props.handleChange('title')}
                />
                <Input 
                  name="value"
                  type="number"
                  icon={FiDollarSign}
                  value={props.values.value}
                  onChange={props.handleChange('value')}
                />
                <SelectType 
                  name="type"
                  value={props.values.type}
                  onChange={props.handleChange('type')}
                >
                  <option value="withdraw">Withdraw</option>
                  <option value="deposit">Deposit</option>
                </SelectType>
                <Button type="submit">Add</Button>
              </form>
            </Content>
          )}
        </Formik>
      </Container>
    </Modal>
  )
}

export default AccountModal;