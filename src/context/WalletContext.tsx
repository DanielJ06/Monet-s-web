import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

import api from '../services/api';
import { AuthContext } from './AuthContext';

interface Wallet {
  id: number;
  title: string;
  description: string;
  total: number;
}

interface WalletContextData {
  wallet: Wallet;
  handleChangeWallet(id: number): Promise<void>;
}


export const WalletContext = createContext<WalletContextData>({} as WalletContextData);

export const WalletProvider: React.FC = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState<Wallet>({} as Wallet);

  useEffect(() => {
    async function firstWallet() {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      if (token) {
        const walletData = await api.get('/wallet', config)
        setData(walletData.data[0]);
      } else {
        return
      }
    }

    firstWallet();
  }, [token]);
  
  const handleChangeWallet = useCallback(async (id: number) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = await api.get(`/wallet/${id}`, config)
    setData(response.data);
  }, [token]);

  return (
    <WalletContext.Provider value={{ wallet: data, handleChangeWallet }}>
      {children}
    </WalletContext.Provider>
  );
}