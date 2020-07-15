import React from 'react';

import { MdAccountBalanceWallet } from 'react-icons/md';

import { 
  Container, 
  ContentContainer,
  SectionTitle,
  TotalBox,
  MoneyType,
  TotalValue,
  WalletBox,
  WalletButton,
  BtnText,
} from './styles';

const Balance: React.FC = () => {
  return (
    <Container>
      <SectionTitle>My Balance</SectionTitle>
      <ContentContainer>
        <TotalBox>
          <MoneyType>R$</MoneyType>
          <TotalValue>{(17500).toLocaleString('pt-BR')}</TotalValue>
        </TotalBox>
        <WalletBox>
          <WalletButton>
            <MdAccountBalanceWallet style={{ marginRight: 10 }} size={55} color="#fff" />
            <div>
              <BtnText>Personal</BtnText>
              <BtnText>Wallet</BtnText>
            </div>
          </WalletButton>
        </WalletBox>
      </ContentContainer>
    </Container>
  );
}

export default Balance;