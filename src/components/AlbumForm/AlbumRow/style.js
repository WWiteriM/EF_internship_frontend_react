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
  padding: 20px 0;
  display: flex;
  height: 100%;
  justify-content: center;
  border: 1px solid #dedede;
  background-color: darkgrey;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
`;

export const ControlPanel = styled.div`
  padding: 10px;
  width: 100px;
  height: 80px;
  background-color: darkgrey;
  border: 1px solid black;
  border-radius: 15px;
`;

export const Update = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  padding: 5px 0;
  border-radius: 15px;

  &:hover {
    background-color: lightgrey;
  }
`;

export const Delete = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  padding: 5px 0;
  border-radius: 15px;

  &:hover {
    background-color: lightgrey;
  }
`;
