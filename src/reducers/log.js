import { LOG_MESSAGE, CLEAR_LOG } from '../constants/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOG_MESSAGE:
      return [...state, payload];
    case CLEAR_LOG:
      return [];
    default:
      return state;
  }
}
