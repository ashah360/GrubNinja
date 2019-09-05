import {
  LOAD_CHARACTERS,
  LOAD_INVENTORY,
  LOAD_MAPS,
  LOAD_CROWNS,
  CLEAR_USER_DATA
} from '../constants/types';

const initialState = {
  characters: [],
  inventory: [],
  maps: [],
  crowns: '0',
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CHARACTERS:
      return { ...state, characters: payload };
    case LOAD_INVENTORY:
      return { ...state, inventory: payload };
    case LOAD_MAPS:
      return { ...state, maps: payload };
    case LOAD_CROWNS:
      return { ...state, crowns: payload };
    case CLEAR_USER_DATA:
      return initialState;
    default:
      return state;
  }
}
