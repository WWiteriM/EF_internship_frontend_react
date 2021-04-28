import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  TableRow, TableCell,
} from './style';

function AlbumRow(props) {
  const { el } = props;

  const history = useHistory();

  const redirectToAlbum = (id) => {
    history.push(`/albums/${id}`);
  };

  return (
    <TableRow onClick={() => { redirectToAlbum(el.id); }}>
      <TableCell>{el.id}</TableCell>
      <TableCell className="albumRow">{el.name}</TableCell>
    </TableRow>
  );
}

export default AlbumRow;
