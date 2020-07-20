import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #E0E5EB;
  border-radius: 10px;
  
  padding: 16px;
  width: 100%;
  
  border: 2px solid #E0E5EB;
  color: #4D4646;

  display: flex;
  align-items: center;

  & + div {
      margin-top: 8px;
  }

  ${props => props.isFocused && css`
    border-color: #2968E9;
    color: #2968E9;
  `}

  input {
    flex: 1;
    background: transparent;
    border: none;

    &::placeholder {
      color: #4D4646;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
