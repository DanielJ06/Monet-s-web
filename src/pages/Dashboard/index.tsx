import React from 'react';

import Latest from '../../components/Latest';
import Balance from '../../components/Balance';
import Summary from '../../components/Summary';
import Account from '../../components/Account';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Account />
      <Balance />
      <Summary />
      <Latest />
    </Container>
  );
}

export default Dashboard;