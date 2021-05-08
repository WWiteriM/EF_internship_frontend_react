import { GET_ALL_ALBUMS } from './constants';

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
    default:
      return state;
  }
};
