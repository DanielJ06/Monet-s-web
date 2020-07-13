import React from 'react';

import Latest from '../../components/Latest';
import Balance from '../../components/Balance';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
        <Latest />
        <Balance />
        <Latest />
        <Latest />
    </Container>
  );
}

export default Dashboard;