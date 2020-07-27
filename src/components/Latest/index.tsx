import React, { useEffect, useState, useContext, useCallback } from 'react';

import { MdAttachMoney, MdMoneyOff, MdEvent, MdAdd } from 'react-icons/md';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { AuthContext } from '../../context/AuthContext';
import { WalletContext } from '../../context/WalletContext';
import AddModal from './addTransactionModal';

import api from '../../services/api';

import { 
  Container,
  Header,
  SeeMore,
  ContentContainer,
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadLatestTransactions() {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const transactions = await api.get(`/transaction/latest?walletId=${wallet.id}`, config)
        setTransactions(transactions.data);
      } catch (err) {
        console.error(err)
      }
    }
    loadLatestTransactions()
  }, [token, wallet.id]);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  function dateParsed(date: string) {
    return formatRelative(parseISO(date), new Date(), {
      locale: pt,
    });
  }

  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
          <SectionTitle>Latest</SectionTitle>
          <button onClick={handleOpenModal} style={{ border: 'none', backgroundColor: 'transparent' }} >
            <MdAdd size={38} color="#4D4646" style={{ marginLeft: 8 }} />
          </button>
        </div>
        <SeeMore>See more</SeeMore>
      </Header>
      <ContentContainer>
      { transactions ? transactions.map(transaction => (
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
      )) : (
        <></>
      )}
      </ContentContainer>
      <AddModal 
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  );
}

export default Latest;