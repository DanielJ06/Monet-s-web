import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  grid-area: 'latest';
  background-color: #e5e6f0;

  padding: 25px;
  border-radius: 32px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const SeeMore = styled.h3`
  font-weight: bold;
  text-decoration: underline;
`;

export const SectionTitle = styled.h1`
  color: #4D4646;
  font-weight: bold;
  font-size: 48px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 16px 32px;
  margin: 12px 0;

  border-radius: 21px;
  
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  transition: box-shadow 1s ease;  

  :hover {
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #7FCD91;

  width: 50px;
  height: 50px;

  border-radius: 12px;

  transition: background-color 1s ease;

  :hover {
    background-color: #42b95e;
  }
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

  margin-left: 5px;
  margin-right: 12px;
`;
