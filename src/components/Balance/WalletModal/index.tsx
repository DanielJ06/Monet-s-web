import React, { useEffect, useContext, useState } from 'react';
import { Modal } from "react-responsive-modal";

import { AuthContext } from '../../../context/AuthContext';
import { WalletContext } from '../../../context/WalletContext';
import api from '../../../services/api';

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

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      {wallets.map((wallet) => (
        <button onClick={() => handleChangeWallet(wallet.id)} >{wallet.title}</button>
      ))}
    </Modal>
  );
}

export default WalletModal;