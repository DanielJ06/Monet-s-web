import React from 'react';

import { MdAttachMoney, MdEvent, MdDeleteForever } from 'react-icons/md';

import { 
  Container,
  SectionTitle,
  TransactionContainer,
  BoxContainer,
  Type,
  InfoContainer,
  Title,
  Date,
  MoneyType,
  TransactionValue,
} from './styles';

const Latest: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Latest</SectionTitle>
      <TransactionContainer>
        <BoxContainer>
          <Type>
            <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
          </Type>
          <InfoContainer>
            <Title>Frango no Pote</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <MdEvent size={21} color="#4D4646" />
              <Date>3 days ago</Date>
            </div>
          </InfoContainer>
        </BoxContainer>
        <BoxContainer>
          <MoneyType>R$</MoneyType>
          <TransactionValue>46,70</TransactionValue>
          <button style={{ border: 'none' }} >
            <MdDeleteForever size={32} color="#4D4646" />
          </button>
        </BoxContainer>
      </TransactionContainer>
      <TransactionContainer>
        <BoxContainer>
          <Type>
            <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
          </Type>
          <InfoContainer>
            <Title>Frango no Pote</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <MdEvent size={21} color="#4D4646" />
              <Date>3 days ago</Date>
            </div>
          </InfoContainer>
        </BoxContainer>
        <BoxContainer>
          <MoneyType>R$</MoneyType>
          <TransactionValue>46,70</TransactionValue>
          <button style={{ border: 'none' }} >
            <MdDeleteForever size={32} color="#4D4646" />
          </button>
        </BoxContainer>
      </TransactionContainer>
      <TransactionContainer>
        <BoxContainer>
          <Type>
            <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
          </Type>
          <InfoContainer>
            <Title>Frango no Pote</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <MdEvent size={21} color="#4D4646" />
              <Date>3 days ago</Date>
            </div>
          </InfoContainer>
        </BoxContainer>
        <BoxContainer>
          <MoneyType>R$</MoneyType>
          <TransactionValue>46,70</TransactionValue>
          <button style={{ border: 'none' }} >
            <MdDeleteForever size={32} color="#4D4646" />
          </button>
        </BoxContainer>
      </TransactionContainer>
      <TransactionContainer>
        <BoxContainer>
          <Type>
            <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
          </Type>
          <InfoContainer>
            <Title>Frango no Pote</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <MdEvent size={21} color="#4D4646" />
              <Date>3 days ago</Date>
            </div>
          </InfoContainer>
        </BoxContainer>
        <BoxContainer>
          <MoneyType>R$</MoneyType>
          <TransactionValue>46,70</TransactionValue>
          <button style={{ border: 'none' }} >
            <MdDeleteForever size={32} color="#4D4646" />
          </button>
        </BoxContainer>
      </TransactionContainer>
      <TransactionContainer>
        <BoxContainer>
          <Type>
            <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
          </Type>
          <InfoContainer>
            <Title>Frango no Pote</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <MdEvent size={21} color="#4D4646" />
              <Date>3 days ago</Date>
            </div>
          </InfoContainer>
        </BoxContainer>
        <BoxContainer>
          <MoneyType>R$</MoneyType>
          <TransactionValue>46,70</TransactionValue>
          <button style={{ border: 'none' }} >
            <MdDeleteForever size={32} color="#4D4646" />
          </button>
        </BoxContainer>
      </TransactionContainer>
      <TransactionContainer>
        <BoxContainer>
          <Type>
            <MdAttachMoney size={48} color="#fff" style={{ marginLeft: 3 }} />
          </Type>
          <InfoContainer>
            <Title>Frango no Pote</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
              <MdEvent size={21} color="#4D4646" />
              <Date>3 days ago</Date>
            </div>
          </InfoContainer>
        </BoxContainer>
        <BoxContainer>
          <MoneyType>R$</MoneyType>
          <TransactionValue>46,70</TransactionValue>
          <button style={{ border: 'none' }} >
            <MdDeleteForever size={32} color="#4D4646" />
          </button>
        </BoxContainer>
      </TransactionContainer>
    </Container>
  );
}

export default Latest;