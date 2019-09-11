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
  petsLeveled: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_GENERATOR_ITEMS:
      const items = [...payload, ...state.items];
      window.ipcRenderer.send('save-gen-metric', items);
      return { ...state, items };

    case LOAD_INITIAL_METRICS:
      return { ...state, ...payload };

    case ADD_GENERATOR_ITEM:
      return { ...state, items: [payload, ...state.items] };

    case ADD_XP:
      const exp = parseInt(payload) || 0; // If for some reason we get a wack value, default to 0
      const totalExp = state.expTrained + exp;
      window.ipcRenderer.send('save-exp-metric', totalExp);
      return { ...state, expTrained: totalExp };

    case ADD_PET_LEVEL:
      const totalPetsLeveled = state.petsLeveled + 1;
      window.ipcRenderer.send('save-pets-leveled-metric', totalPetsLeveled);
      return { ...state, petsLeveled: totalPetsLeveled };

    default:
      return state;
  }
}
