import { GET_ALL_ALBUMS, DELETE_ALBUMS, UPDATE_ALBUMS } from './constants';

const initialState = {
  albums: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_ALL_ALBUMS: {
    return {
      ...state,
      albums: action.payload.albums,
    };
  }
  case DELETE_ALBUMS: {
    return {
      ...state,
      albums: action.payload.albums,
    };
  }
  case UPDATE_ALBUMS: {
    return {
      ...state,
      albums: action.payload.albums,
    };
  }
  default:
    return state;
  }
};
