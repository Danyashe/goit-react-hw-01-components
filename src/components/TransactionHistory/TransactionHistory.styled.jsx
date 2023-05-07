import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TableTransactiontr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid silver;
  th {
    width: 200px;
  }
  td {
    width: 200px;
    text-align: center;
  }
`;

export const TableHead = styled.thead`
  background-color: teal;
  color: white;
`;

export const TableBody = styled.tbody`
  color: grey;
`;
