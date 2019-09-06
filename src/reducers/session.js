import { SET_JAR, RESET_JAR } from '../constants/types';

// We actually don't need this anymore because of request defaults

const initialState = window.request.jar();

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_JAR:
      return payload;
    case RESET_JAR:
      return window.request.jar();
    default:
      return state;
  }
}
