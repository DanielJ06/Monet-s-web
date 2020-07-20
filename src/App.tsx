import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import "react-responsive-modal/styles.css";

import { AuthProvider } from './context/AuthContext';
import { WalletProvider } from './context/WalletContext';

import Routes from './routes/index';

function App() {
  return (
    <Router>
      <AuthProvider>
        <WalletProvider>
          <Routes />
        </WalletProvider>
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
