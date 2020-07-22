import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;

  padding: 48px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  padding: 8px;
  margin: 28px 0;
  border-bottom: 1px solid #eee;

  h3 {
    font-weight: bold;
  }
`;

export const WalletBtn = styled.button`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;

  padding: 18px;

  background-color: #2968e9;
  border-radius: 21px;
  border: none;
  transition: background-color 1s ease;

  & + button {
    margin-top: 8px;
  }

  :hover {
    background-color: #31559E;
  }
`;

export const WalletTitle = styled.h3`
  text-align: left;
  color: #fff;
  font-weight: bold;
`;

export const WalletDesc = styled.p`
  text-align: left;
  color: #fff;
`;

export const WalletTotal = styled.h3`
  color: #fff;
  font-weight: bold;
`;

