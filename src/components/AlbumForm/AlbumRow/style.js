import styled from 'styled-components';

export const TableRow = styled.tr`
  background-color: lightgrey;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover .albumRow {
    background-color: lightgrey;
  }
`;

export const TableCell = styled.td`
  padding: 20px;
  border: 1px solid #dedede;
  background-color: darkgrey;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
`;
