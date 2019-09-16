import { LOAD_INITIAL_METRICS } from '../constants/types';

export const loadMetrics = payload => dispatch => {
  dispatch({ type: LOAD_INITIAL_METRICS, payload });
};
