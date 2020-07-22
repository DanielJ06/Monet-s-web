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

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 32px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

export const Button = styled.button`
  background: #2968E9;
  color: #fff;
  
  height: 56px;
  width: 100%;
  
  border-radius: 10px;
  border: 0;
  
  padding: 0 16px;
  margin-top: 16px;
  
  font-weight: bold;
  font-size: 21px;

  transition: background-color 0.3s;

  :hover {
    background: #31559E;
  }
`;