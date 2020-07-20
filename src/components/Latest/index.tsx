import React, { useEffect, useState, useContext } from 'react';

import { MdAttachMoney, MdMoneyOff, MdEvent } from 'react-icons/md';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { AuthContext } from '../../context/AuthContext';
import { WalletContext } from '../../context/WalletContext';

import api from '../../services/api';

import { 
  Container,
  Header,
  SeeMore,
  SectionTitle,
  TransactionContainer,
  BoxContainer,
  Type,
  InfoContainer,
  Title,
  TransactionDate,
  MoneyType,
  TransactionValue,
} from './styles';

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  createdAt: string;
}

const Latest: React.FC = () => {
  const { token } = useContext(AuthContext);
  const { wallet } = useContext(WalletContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadLatestTransactions() {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const transactions = await api.get(`/transaction/latest?walletId=${wallet.id}`, config)
      setTransactions(transactions.data);
    }
    loadLatestTransactions();
  }, [wallet.id, token]);

  function dateParsed(date: string) {
    return formatRelative(parseISO(date), new Date(), {
      locale: pt,
    });
  }

  return (
    <Container>
      <Header>
        <SectionTitle>Latest</SectionTitle>
        <SeeMore>See more</SeeMore>
      </Header>
      {transactions.map(transaction => (
        <TransactionContainer key={transaction.id} >
          <BoxContainer>
            <Type transactionType={transaction.type}>
              {transaction.type === 'deposit' ? (
                <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
              ) : (
                <MdMoneyOff size={48} color="#fff" />
              )}
            </Type>
            <InfoContainer>
              <Title>{transaction.title}</Title>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                <MdEvent size={21} color="#4D4646" />
                <TransactionDate>{dateParsed(transaction.createdAt)}</TransactionDate>
              </div>
            </InfoContainer>
          </BoxContainer>
          <BoxContainer>
            <MoneyType transactionType={transaction.type}>R$</MoneyType>
            <TransactionValue 
              transactionType={transaction.type}
            >
              {transaction.value}
            </TransactionValue>
          </BoxContainer>
        </TransactionContainer>
      ))}
    </Container>
  );
}

export default Latest;