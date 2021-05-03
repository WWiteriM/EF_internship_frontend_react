import React from 'react';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import UpdateAlbum from '../UpdateAlbum/index';
import DeleteAlbum from '../DeleteAlbum/index';
import {
  TableRow,
  TableCell,
  TableCellLink,
  TableCellControl,
  Update,
  Delete,
  ControlPanel,
} from './style';

function AlbumRow(props) {
  const { el, setAlbums } = props;
  const history = useHistory();

  const redirectToAlbum = (id) => {
    history.push(`/albums/${id}`);
  };

  return (
    <TableRow>
      <TableCell>{el.id}</TableCell>
      <TableCellLink
        onClick={() => {
          redirectToAlbum(el.id);
        }}
      >
        {el.name}
      </TableCellLink>
      <Popup
        trigger={() => <TableCellControl>Control panel</TableCellControl>}
        position="right center"
        closeOnDocumentClick
        nested
      >
        <ControlPanel>
          <Popup trigger={<Update> Update </Update>} modal nested>
            {(close) => <UpdateAlbum setAlbums={setAlbums} id={el.id} onClose={() => close()} />}
          </Popup>
          <Popup trigger={<Delete> Delete </Delete>} modal nested>
            {(close) => <DeleteAlbum setAlbums={setAlbums} id={el.id} onClose={() => close()} />}
          </Popup>
        </ControlPanel>
      </Popup>
    </TableRow>
  );
}

AlbumRow.propTypes = {
  el: PropTypes.objectOf(PropTypes.object).isRequired,
  setAlbums: PropTypes.func.isRequired,
};

export default AlbumRow;
