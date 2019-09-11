import { LOAD_GENERATOR_ITEMS, ADD_GENERATOR_ITEM } from '../constants/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_GENERATOR_ITEMS:
      // Load an array of objects
      return [...payload, ...state.items];
    case ADD_GENERATOR_ITEM:
      return [payload, ...state.items];
    default:
      return state;
  }
}
