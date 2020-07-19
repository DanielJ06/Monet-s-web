import React from 'react';

import GlobalStyle from './styles/global';
//import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
