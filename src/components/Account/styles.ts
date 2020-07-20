import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  grid-area: account;
  background-color: #e5e6f0;

  padding: 32px;
  border-radius: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  h3 {
    font-weight: bold;
    font-size: 32px;

    margin-top: 18px;
  }
  
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

