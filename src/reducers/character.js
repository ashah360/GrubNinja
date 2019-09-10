import {
  LOAD_CHARACTER_DATA,
  CLEAR_CHARACTER_DATA,
  LOAD_PETS,
  CLEAR_PETS,
  LOAD_SNACKS,
  SUBTRACT_SNACK,
  CLEAR_SNACKS,
  RESET_CHARACTER_STATE,
  UPDATE_PET
} from '../constants/types';

const initialDataState = {
  CharId: null,
  CharNameId: null,
  Name: null,
  Energy: '0',
  MaxEnergy: '0',
  School: null,
  Level: null
};

const initialState = {
  data: initialDataState, // loaded directly from API, energy data found here too
  pets: [], // array of objects
  snacks: [], // array of objects
  loading: false // boolean
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CHARACTER_DATA:
      return { ...state, data: { ...state.data, ...payload } };
    case CLEAR_CHARACTER_DATA:
      return {
        data: initialDataState,
        pets: [],
        snacks: [],
        loading: false
      };
    case LOAD_PETS:
      return { ...state, pets: payload };
    case CLEAR_PETS:
      return { ...state, pets: [] };
    case UPDATE_PET: // new Object payload
      // returns old pet object with the new values
      const currentState = [];
      Object.assign(currentState, state.pets);
      const index = currentState.findIndex(pet => pet.PetId === payload.PetId);
      const petObj = currentState[index];
      const newPetObj = { ...petObj, ...payload };
      currentState[index] = newPetObj;
      return { ...state, pets: currentState };

    case LOAD_SNACKS:
      return { ...state, snacks: payload };
    case CLEAR_SNACKS:
      return { ...state, snacks: [] };
    case SUBTRACT_SNACK:
      const snacks = [...state.snacks];
      snacks.find(snack => snack.TemplateId === payload).Qty -= 1;
      return { ...state, snacks };
    case RESET_CHARACTER_STATE:
      return initialState;
    default:
      return state;
  }
}
