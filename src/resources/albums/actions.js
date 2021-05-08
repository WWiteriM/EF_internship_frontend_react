import { GET_ALL_ALBUMS } from './constants';
import { getAllAlbums } from '../../http/requests/albums/index';

// eslint-disable-next-line import/prefer-default-export
export const fetchAlbums = () => async (dispatch) => {
  const data = await getAllAlbums();
  const albums = data.map(({ id, name }) => ({
    name,
    id,
  }));
  dispatch({
    type: GET_ALL_ALBUMS,
    payload: {
      albums,
    },
  });
};
