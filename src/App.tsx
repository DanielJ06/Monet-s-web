import React from 'react';
import GlobalStyle from './styles/global';

//import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

function App() {
  return (
    <React.Fragment>
      <SignIn />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
