import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  grid-area: 'account';
  background-color: #e5e6f0;

  

  padding: 32px;
  border-radius: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  h3 {
    font-weight: bold;
    font-size: 32px;

    margin-top: 18px;
  }
`;

export const UserAvatar = styled.div`
  img {
    border-radius: 50%;
    width: 195px;
    height: 195px;
  }
`;

export const ActionsArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

export const ActionBtn = styled.button`
  background-color: #2968e9;
  border-radius: 8px;
  border: none;
  
  padding: 16px 32px;
  margin: 12px 0;
  
  transition: background-color 1s ease;

  :hover {
    background-color: #31559E;
  }
`;

export const BtnText = styled.div`
  font-weight: bold;
  color: #fff;
`;

