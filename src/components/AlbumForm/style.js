import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-top: 50px;
  color: black;
`;

export const Table = styled.table`
  padding: 30px;
  width: 80%;
  max-width: 800px;
  border: 1px solid #dedede;
  background-color: darkgrey;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

export const TableHead = styled.tr`
  background-color: lightgrey;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;
