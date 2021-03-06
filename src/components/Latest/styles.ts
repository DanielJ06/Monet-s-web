import styled from 'styled-components';

type colorType = {
  transactionType: string
}

export const Container = styled.div`
  flex: 1;
  grid-area: latest;
  background-color: #e5e6f0;

  padding: 25px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  overflow:auto;
  height: 575px;
  
  ::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
`;

export const SeeMore = styled.h3`
  font-weight: bold;
  text-decoration: underline;
`;

export const SectionTitle = styled.h1`
  color: #4D4646;
  font-weight: bold;
  font-size: 48px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 16px 32px;
  margin: 12px 0;

  border-radius: 21px;
  
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  transition: box-shadow 1s ease;  

  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

`;


export const Type = styled.div<colorType>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.transactionType === 'deposit' ? '#7FCD91' : '#AF5353'};

  width: 50px;
  height: 50px;

  border-radius: 12px;

  transition: background-color 1s ease;

  :hover {
    background-color: ${props => props.transactionType === 'deposit' ? '#42b95e' : '#961919'};
  }
`;

export const TypeIcon = styled.h1``;

export const InfoContainer = styled.div`
  margin-left: 25px;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const TransactionDate = styled.p`
  font-weight: bold;
  margin-left: 3px;
`;

export const MoneyType = styled.p<colorType>`
  font-weight: bold;
  color: ${props => props.transactionType === 'deposit' ? '#7FCD91' : '#AF5353'};
`;

export const TransactionValue = styled.h1<colorType>`
  font-weight: bold;
  color: ${props => props.transactionType === 'deposit' ? '#7FCD91' : '#AF5353'};

  margin-left: 5px;
  margin-right: 12px;
`;
