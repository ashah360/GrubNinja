import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REQUEST_NEW_TOKEN,
  ACKNOWLEDGE_TOKEN
} from '../constants/types';

const initialState = {
  username: null,
  password: null,
  isLoggedIn: false,
  tokenRefreshRequired: false,
  initialFetched: false,
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        initialFetched: true,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        username: null,
        password: null,
        isLoggedIn: false,
        tokenRefreshRequired: true,
        loading: false
      };
    case ACKNOWLEDGE_TOKEN:
      return {
        ...state,
        tokenRefreshRequired: false
      };
    case REQUEST_NEW_TOKEN:
      return {
        ...state,
        tokenRefreshRequired: true
      };
    default:
      return state;
  }
}
