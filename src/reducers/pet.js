import { SET_ACTIVE_PET, CLEAR_ACTIVE_PET } from '../constants/types';

const initialState = null;

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_PET:
      return payload;
    case CLEAR_ACTIVE_PET:
      return null;
    default:
      return state;
  }
}
