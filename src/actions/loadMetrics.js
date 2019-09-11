import {
  LOAD_GENERATOR_ITEMS,
  ADD_XP,
  ADD_PET_LEVEL,
  LOAD_INITIAL_METRICS
} from '../constants/types';

export const loadMetrics = payload => dispatch => {
  dispatch({ type: LOAD_INITIAL_METRICS, payload });
};
