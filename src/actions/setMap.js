import { SET_MAP_ID } from '../constants/types';

export default mapId => dispatch =>
  dispatch({ type: SET_MAP_ID, payload: mapId });
