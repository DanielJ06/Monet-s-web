import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const res = await api.post('/session', {
      email,
      password,
    });

    console.log(res.data)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
