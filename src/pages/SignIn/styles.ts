import styled, { keyframes } from 'styled-components';

import loginBg from '../../assets/login-bg.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 0 32px;

  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-weight: bold;
      margin-bottom: 24px;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  
  background: #E0E5EB;
  color: #4D4646;
  
  margin-top: 8px;
  padding: 16px;
  
  width: 100%;
  align-items: center;
  
  border: none;
  border-radius: 10px;
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
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBg}) no-repeat center;
  background-size: cover;
`;