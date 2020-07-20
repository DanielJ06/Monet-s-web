import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 20vh 35vh 45vh;
  grid-template-areas: "account latest" "balance latest" "summary latest";
  grid-gap: 21px;

  padding: 32px;

  animation: ${appearFromBottom} 2s;
`;
