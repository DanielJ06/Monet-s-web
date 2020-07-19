import React, { useContext } from 'react';

import { MdAccountBalanceWallet } from 'react-icons/md';

import { WalletContext } from '../../context/WalletContext';

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
  const { wallet } = useContext(WalletContext);
  
  return (
    <Container>
      <SectionTitle>My Balance</SectionTitle>
      <ContentContainer>
        <TotalBox>
          <MoneyType>R$</MoneyType>
          <TotalValue>{wallet.total}</TotalValue>
        </TotalBox>
        <WalletBox>
          <WalletButton>
            <MdAccountBalanceWallet style={{ marginRight: 10 }} size={55} color="#fff" />
            <div>
              <BtnText>{wallet.title}</BtnText>
              <BtnText>Wallet</BtnText>
            </div>
          </WalletButton>
        </WalletBox>
      </ContentContainer>
    </Container>
  );
}

export default Balance;