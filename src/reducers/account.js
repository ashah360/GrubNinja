import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_CHARACTERS,
  LOAD_INVENTORY,
  SET_JAR,
  SET_CSID
} from '../constants/types';

const initialState = {
  username: null,
  password: null,
  isLoggedIn: false,
  csid: null,
  characters: [],
  inventory: [],
  loading: true,
  jar: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        username: false,
        password: false,
        csid: null,
        isLoggedIn: false,
        loading: false,
        characters: [],
        inventory: []
      };
    case LOAD_INVENTORY:
      return {
        ...state,
        inventory: payload
      };
    case LOAD_CHARACTERS:
      return {
        ...state,
        characters: payload
      };
    case SET_CSID:
      return {
        ...state,
        csid: payload
      };
    case SET_JAR:
      return {
        ...state,
        jar: payload
      };
    default:
      return state;
  }
}
