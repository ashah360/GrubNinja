import {
  //RESET_JAR,
  RESET_ACCOUNT_STATE,
  CLEAR_USER_DATA,
  RESET_CHARACTER_STATE,
  CLEAR_ACTIVE_PET,
  CLEAR_GAME_DATA
} from '../constants/types';

// Reset Redux State
export default () => dispatch => {
  //dispatch({ type: RESET_JAR });
  dispatch({ type: RESET_ACCOUNT_STATE });
  dispatch({ type: CLEAR_USER_DATA });
  dispatch({ type: RESET_CHARACTER_STATE });
  dispatch({ type: CLEAR_ACTIVE_PET });
  dispatch({ type: CLEAR_GAME_DATA });
};
