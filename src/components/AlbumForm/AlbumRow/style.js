import styled from 'styled-components';

export const TableRow = styled.tr`
  background-color: lightgrey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const TableCell = styled.td`
  padding: 20px;
  border: 1px solid #dedede;
  background-color: darkgrey;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
`;

export const TableCellLink = styled.td`
  padding: 20px;
  border: 1px solid #dedede;
  background-color: darkgrey;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);

  &:hover {
    background-color: lightgrey;
  }
`;

export const TableCellControl = styled.td`
  display: flex;
  height: 100%;
  justify-content: center;
  border: 1px solid #dedede;
  background-color: darkgrey;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
`;

export const Update = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px solid black;

  &:hover {
    background-color: lightgrey;
  }
`;

export const Delete = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px solid black;

  &:hover {
    background-color: lightgrey;
  }
`;
