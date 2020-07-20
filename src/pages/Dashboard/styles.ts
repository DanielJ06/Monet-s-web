import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 20vh 35vh 45vh;
  grid-template-areas: "account latest" "balance latest" "summary latest";
  grid-gap: 21px;

  padding: 32px;
`;
