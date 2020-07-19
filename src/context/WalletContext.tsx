import React, { createContext, useState, useEffect, useContext } from 'react';

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
      const walletData = await api.get('/wallet', config)
      setData(walletData.data[0]);
    }

    firstWallet();
    console.log('o')
  }, [token]);
  
  return (
    <WalletContext.Provider value={{ wallet: data }}>
      {children}
    </WalletContext.Provider>
  );
}