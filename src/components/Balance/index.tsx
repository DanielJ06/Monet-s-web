import React, { useContext, useState, useCallback } from 'react';

import { MdAccountBalanceWallet } from 'react-icons/md';

import WalletModal from './WalletModal';
import { WalletContext } from '../../context/WalletContext';

import { 
  Container, 
  ContentContainer,
  SectionTitle,
  TotalBox,
  MoneyType,
  TotalValue,
  WalletButton,
  BtnText,
} from './styles';

const Balance: React.FC = () => {
  const { wallet } = useContext(WalletContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Container>
        <SectionTitle>My Balance</SectionTitle>
        <ContentContainer>
          <TotalBox>
            <MoneyType>R$</MoneyType>
            <TotalValue>{wallet.total}</TotalValue>
          </TotalBox>
          <WalletButton onClick={handleOpenModal}>
            <MdAccountBalanceWallet style={{ marginRight: 10 }} size={55} color="#fff" />
            <div>
              <BtnText>{(wallet.title)}</BtnText>
              <BtnText>Wallet</BtnText>
            </div>
          </WalletButton>
        </ContentContainer>
      </Container>
      <WalletModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default Balance;