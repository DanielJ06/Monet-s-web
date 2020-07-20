import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 21px 21px;
  grid-template-areas: "summary balance" "latest account";

  padding: 32px;
`;
