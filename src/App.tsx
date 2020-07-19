import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

import Routes from './routes/index';

function App() {
  return (
    <Router>
      <AuthProvider>
          <Routes />
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
