import {
  LOAD_GENERATOR_ITEMS,
  ADD_GENERATOR_ITEM,
  ADD_XP,
  ADD_PET_LEVEL,
  LOAD_INITIAL_METRICS
} from '../constants/types';

const initialState = {
  items: [],
  expTrained: 0,
  petsLeveled: 0,
  sessionItems: [],
  sessionExp: 0,
  sessionPets: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_GENERATOR_ITEMS:
      const items = [...payload, ...state.items];
      const sessItems = [...payload, ...state.sessionItems];
      window.ipcRenderer.send('save-gen-metric', items);
      return { ...state, items, sessionItems: sessItems };

    case LOAD_INITIAL_METRICS:
      return { ...state, ...payload };

    case ADD_GENERATOR_ITEM:
      return { ...state, items: [payload, ...state.items] };

    case ADD_XP:
      const exp = parseInt(payload) || 0; // If for some reason we get a wack value, default to 0
      const totalExp = parseInt(state.expTrained) + exp;
      const sessExp = state.sessionExp + exp;
      window.ipcRenderer.send('save-exp-metric', totalExp.toString());
      return { ...state, expTrained: totalExp, sessionExp: sessExp };

    case ADD_PET_LEVEL:
      const totalPetsLeveled = state.petsLeveled + 1;
      const sessPets = state.sessionPets + 1;
      window.ipcRenderer.send('save-pets-leveled-metric', totalPetsLeveled);
      return { ...state, petsLeveled: totalPetsLeveled, sessionPets: sessPets };

    default:
      return state;
  }
}
