import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  grid-area: balance;
  background-color: #e5e6f0;

  padding: 25px;
  border-radius: 8px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: flex-end;
  justify-content: space-between;
`;

export const SectionTitle = styled.h1`
  color: #4D4646;
  font-weight: bold;
  font-size: 48px;
`;

export const TotalBox = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const MoneyType = styled.p`
  color: #2968E9;
  font-weight: bold;
  font-size: 36px;

  margin-right: 5px;
`;

export const TotalValue = styled.h1`
  color: #2968E9;
  font-weight: bold;
  font-size: 68px;

  :hover {
    cursor: pointer;
  }
`;

export const WalletButton = styled.button`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding: 18px;
  
  background-color: #2968e9;
  border-radius: 28px;
  border: none;
  transition: background-color 1s ease;

  :hover {
    background-color: #31559E;
  }
`;

export const BtnText = styled.div`
  font-weight: bold;
  color: #fff;
  text-align: left;
`;
