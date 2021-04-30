import styled from 'styled-components';

export const UpdateAlbumContainer = styled.div`
  position: fixed;
  height: 80%;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: lightgrey;
  padding: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
`;

export const UpdateAlbumContent = styled.div`
  position: 'fixed';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Close = styled.div`
  position: 'fixed';
  text-align: right;
  padding: 0 30px;
`;
