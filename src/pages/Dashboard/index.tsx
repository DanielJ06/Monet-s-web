import React from 'react';

import Latest from '../../components/Latest';
import Balance from '../../components/Balance';
import Summary from '../../components/Summary';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
        <Summary />
        <Balance />
        <Latest />
        <Latest />
    </Container>
  );
}

export default Dashboard;