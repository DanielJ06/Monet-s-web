import React from 'react';

import { MdCallReceived, MdCallMade } from 'react-icons/md';

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

const Summary: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Summary</SectionTitle>
      <ContentContainer>
        <BtnArea>
          <BtnContainer>
            <BtnText>Year</BtnText>
          </BtnContainer>
          <BtnContainer>
            <BtnText>Month</BtnText>
          </BtnContainer>
        </BtnArea>
        <DataContainer>
          <NumbersBox>
            <Type>Income:</Type>
            <Value style={{ color: "#7FCD91" }}>R$ 150,00</Value>
            <MdCallMade size={18} color="#7FCD91" />
          </NumbersBox>
          <NumbersBox>
            <Type>Expenses:</Type>
            <Value style={{ color: "#AF5353" }}>R$ 150,00</Value>
            <MdCallReceived size={18} color="#AF5353" />
          </NumbersBox>
        </DataContainer>
      </ContentContainer>
    </Container>
  );
}

export default Summary;