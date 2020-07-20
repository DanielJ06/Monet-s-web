import React, { useContext, useState, useEffect } from 'react';

import { MdCallReceived, MdCallMade } from 'react-icons/md';

import { WalletContext } from '../../context/WalletContext';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

import { 
  Container,
  SectionTitle,
  ContentContainer,
  BtnArea,
  BtnContainer,
  BtnText,
  DataContainer,
  NumbersBox,
  Type,
  Value,
} from './styles';

interface Summary {
  income: number;
  expense: number;
}

const Summary: React.FC = () => {
  const { token } = useContext(AuthContext);
  const { wallet } = useContext(WalletContext);
  const [summaryData, setSummaryData] = useState<Summary>({} as Summary);
  const [filter, setFilter] = useState('year');

  useEffect(() => {
    async function loadSummaryData() {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await api.get(`/transaction/summary?walletId=${wallet.id}&filter=${filter}`, config);
      setSummaryData(response.data);
    }
    loadSummaryData()
  }, [filter, token, wallet.id]);

  function handleChangeFilter(filter: string) {
    setFilter(filter);
  }

  return (
    <Container>
      <SectionTitle>Summary</SectionTitle>
      <ContentContainer>
        <BtnArea>
          <BtnContainer 
            style={{ 
              background: filter === 'year' ? '#2968e9' : '#31559E' 
            }}
            onClick={() => handleChangeFilter('year')} 
          >
            <BtnText>Year</BtnText>
          </BtnContainer>
          <BtnContainer 
            style={{ 
              background: filter === 'month' ? '#2968e9' : '#31559E' 
            }} 
            onClick={() => handleChangeFilter('month')}
          >
            <BtnText>Month</BtnText>
          </BtnContainer>
        </BtnArea>
        <DataContainer>
          <NumbersBox>
            <Type>Income:</Type>
            <Value style={{ color: "#7FCD91" }}>R$ {summaryData.income}</Value>
            <MdCallMade size={18} color="#7FCD91" />
          </NumbersBox>
          <NumbersBox>
            <Type>Expenses:</Type>
            <Value style={{ color: "#AF5353" }}>R$ {summaryData.expense}</Value>
            <MdCallReceived size={18} color="#AF5353" />
          </NumbersBox>
        </DataContainer>
      </ContentContainer>
    </Container>
  );
}

export default Summary;