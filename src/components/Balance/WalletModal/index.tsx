import React, { useEffect, useContext, useState, useCallback } from 'react';
import { Modal } from "react-responsive-modal";
import { MdAccountBalanceWallet } from 'react-icons/md';

import { AuthContext } from '../../../context/AuthContext';
import { WalletContext } from '../../../context/WalletContext';
import api from '../../../services/api';

import { 
  Container, 
  WalletBtn, 
  Header,
  WalletTitle,
  WalletDesc,
  WalletTotal,
} from './styles';

interface WalletModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

interface WalletType {
  id: number;
  title: string;
  description: string;
  total: number;
}

const WalletModal: React.FC<WalletModalProps> = ({ isModalOpen, handleCloseModal }) => {
  const { token } = useContext(AuthContext);
  const { handleChangeWallet } = useContext(WalletContext);
  const [wallets, setWallets] = useState<WalletType[]>([]);

  useEffect(() => {
    async function loadWallets() {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.get(`/wallet`, config)
      setWallets(response.data);
    }
    loadWallets()
  }, [token]);

  const handleChangeWalletAndCloseModal = useCallback((id: number) => {
    handleChangeWallet(id);
    handleCloseModal();
  }, [handleChangeWallet, handleCloseModal]);

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Container>
        <Header>
          <MdAccountBalanceWallet style={{ marginRight: 5 }} size={21} />
          <h3>Your Wallets</h3>
        </Header>

        {wallets.map((wallet) => (
          <WalletBtn onClick={() => handleChangeWalletAndCloseModal(wallet.id)}>
            <div>
              <WalletTitle>{wallet.title}</WalletTitle>
              <WalletDesc>{wallet.description}</WalletDesc>
            </div>
            <WalletTotal>R$ {wallet.total}</WalletTotal>
          </WalletBtn>
        ))}
      </Container>
    </Modal>
  );
}

export default WalletModal;