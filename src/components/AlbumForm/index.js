import React, { useState, useEffect } from 'react';

import { getAllAlbums } from '../../http/requests/albums/index';
import AlbumRow from './AlbumRow';
import {
  TableContainer, Table, TableHead,
} from './style';

function AlbumForm() {
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const result = await getAllAlbums();
    setAlbums(result);
  }, [setAlbums]);

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableHead>
            <th>Album Id</th>
            <th>Album name</th>
            <th>Control</th>
          </TableHead>
        </thead>
        <tbody>
          {albums.map((el) => <AlbumRow setAlbums={setAlbums} key={el.id} el={el} />)}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default AlbumForm;
