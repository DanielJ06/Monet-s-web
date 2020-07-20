import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface Credentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: Credentials): Promise<void>;
}

interface AuthData {
  token: string;
  user: User;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@Monets:token');
    const user = localStorage.getItem('@Monets:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const res = await api.post('/session', {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem('@Monets:token', token);
    localStorage.setItem('@Monets:user', JSON.stringify(user));

    setData({ token, user });
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
