import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  grid-area: account;
  background-color: #e5e6f0;

  align-items: center;

  padding: 32px;
  border-radius: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const AvatarArea = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 32px;
    margin: 0 12px;
  }
  
  img {
    border-radius: 50%;
    width: 69px;
    height: 69px;
  }
`;