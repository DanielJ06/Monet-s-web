import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: #e5e6f0;
  grid-area: 'latest';

  padding: 25px;
  border-radius: 32px;
`;

export const SectionTitle = styled.h1`
  color: #4D4646;
  font-weight: bold;
  font-size: 48px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;

  justify-content: space-between;
  align-items: center;

  padding: 16px 32px;
  margin: 12px 0;

  border-radius: 21px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

`;

export const Type = styled.div`
  background-color: #7FCD91;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 12px;
`;

export const TypeIcon = styled.h1``;

export const InfoContainer = styled.div`
  margin-left: 25px;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Date = styled.p`
  font-weight: bold;
`;

export const MoneyType = styled.p`
  font-weight: bold;
  color: #7FCD91;
`;

export const TransactionValue = styled.h1`
  font-weight: bold;
  color: #7FCD91;

  margin-right: 12px;
`;
