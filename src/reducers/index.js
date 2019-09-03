import { combineReducers } from 'redux';
import auth from './user';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
