import {
  SET_CSID,
  SET_CHAR_ID,
  SET_PET_ID,
  SET_GAME_ID,
  SET_MAP_ID,
  CLEAR_GAME_DATA
} from '../constants/types';

import { DEFAULT_MAP } from '../constants/maps';

const initialState = {
  csid: null,
  charId: null,
  petId: null,
  currentGameId: null,
  mapId: DEFAULT_MAP
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CSID:
      return { ...state, csid: payload };
    case SET_CHAR_ID:
      return { ...state, charId: payload };
    case SET_PET_ID:
      return { ...state, petId: payload };
    case SET_GAME_ID:
      return { ...state, currentGameId: payload };
    case SET_MAP_ID:
      return { ...state, mapId: payload };
    case CLEAR_GAME_DATA:
      return initialState;
    default:
      return state;
  }
}
