import { GET_ALL_ALBUMS, DELETE_ALBUMS, UPDATE_ALBUMS } from './constants';
import { getAllAlbums, updateAlbum, deleteAlbum } from '../../http/requests/albums/index';

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

export const deleteAlbums = (id) => async (dispatch) => {
  await deleteAlbum(id);
  const data = await getAllAlbums();
  const albums = data.map((element) => ({
    name: element.name,
    id: element.id,
  }));
  dispatch({
    type: DELETE_ALBUMS,
    payload: {
      albums,
    },
  });
};

export const updateAlbums = (id, params) => async (dispatch) => {
  await updateAlbum(id, params);
  const data = await getAllAlbums();
  const albums = data.map((element) => ({
    name: element.name,
    id: element.id,
  }));
  dispatch({
    type: UPDATE_ALBUMS,
    payload: {
      albums,
    },
  });
};
