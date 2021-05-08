import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AlbumRow from './AlbumRow';
import { fetchAlbums } from '../../resources/albums/actions';
import { getAllAlbums } from '../../resources/albums/selectors';
import { TableContainer, Table, TableHead } from './style';

function AlbumForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  const albumsData = useSelector(getAllAlbums);

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
          {albumsData && albumsData.map((el) => <AlbumRow key={el.id} id={el.id} name={el.name} />)}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default AlbumForm;
