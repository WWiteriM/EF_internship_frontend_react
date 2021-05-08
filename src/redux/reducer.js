import { combineReducers } from 'redux';

import albums from '../resources/albums/reducer';

const rootReducer = combineReducers({
  albums,
});

export default rootReducer;
