import React from 'react';

import Latest from '../../components/Latest';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
        <Latest />
        <Latest />
        <Latest />
        <Latest />
    </Container>
  );
}

export default Dashboard;