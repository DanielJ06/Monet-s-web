import React from 'react';
import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Dashboard />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
