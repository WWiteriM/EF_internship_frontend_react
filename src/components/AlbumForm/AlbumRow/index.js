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
  const { id, name } = props;
  const history = useHistory();

  const redirectToAlbum = () => {
    history.push(`/albums/${id}`);
  };

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCellLink
        onClick={() => {
          redirectToAlbum(id);
        }}
      >
        {name}
      </TableCellLink>
      <Popup
        trigger={() => <TableCellControl>Control panel</TableCellControl>}
        position="right center"
        closeOnDocumentClick
        nested
      >
        <ControlPanel>
          <Popup trigger={<Update> Update </Update>} modal nested>
            {(close) => <UpdateAlbum id={id} onClose={() => close()} />}
          </Popup>
          <Popup trigger={<Delete> Delete </Delete>} modal nested>
            {(close) => <DeleteAlbum id={id} onClose={() => close()} />}
          </Popup>
        </ControlPanel>
      </Popup>
    </TableRow>
  );
}

AlbumRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default AlbumRow;
