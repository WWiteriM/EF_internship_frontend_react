import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UpdateAlbum from '../UpdateAlbum/index';

import {
  TableRow, TableCell, TableCellLink, TableCellControl, Update, Delete,
} from './style';

function AlbumRow(props) {
  const { el } = props;

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const redirectToAlbum = (id) => {
    history.push(`/albums/${id}`);
  };

  return (
    <TableRow>
      <TableCell>{el.id}</TableCell>
      <TableCellLink onClick={() => { redirectToAlbum(el.id); }}>{el.name}</TableCellLink>
      <TableCellControl>
        <Update onClick={() => setIsOpen(true)}>Update</Update>
        <UpdateAlbum id={el.id} open={isOpen} onClose={() => setIsOpen(false)} />
        <Delete>Delete</Delete>
      </TableCellControl>
    </TableRow>
  );
}

export default AlbumRow;
