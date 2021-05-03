import styled from 'styled-components';

export const UpdateAlbumContainer = styled.div`
  position: fixed;
  height: 50%;
  width: 50%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: lightgrey;
  padding: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
`;

export const UpdateAlbumContent = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const FormUpdateAction = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 100px 5px;
  margin: auto;
  text-align: center;
`;

export const Label = styled.p`
  font-size: 30px;
  padding: 0 0 30px;
`;

export const ActionButton = styled.button`
  width: 400px;
`;
