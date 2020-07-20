import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  grid-area: summary;
  background-color: #e5e6f0;

  padding: 25px;
  border-radius: 32px;
`;

export const SectionTitle = styled.h1`
  color: #4D4646;
  font-weight: bold;
  font-size: 48px;
`;

export const ContentContainer = styled.div``;

export const BtnArea = styled.div`
  padding: 12px;
`;

export const BtnContainer = styled.button`
  padding: 12px;
  margin: 0 5px;
  
  border-radius: 15px;
  border: none;
`;

export const BtnText = styled.p`
  font-weight: bold;
  color: #fff;
`;

export const DataContainer = styled.div``;

export const NumbersBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Type = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const Value = styled.h1`
  font-weight: bold;
  margin-left: 18px;
  margin-right: 12px;
`;
