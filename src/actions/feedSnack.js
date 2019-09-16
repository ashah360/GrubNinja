import store from '../store';
import parse from '../util/parse';
import { handlePetRewards } from './handlePetRewards';
import commonForm from '../constants/minigame';
import { USE_PET_SNACK } from '../constants/endpoints';
import { SUBTRACT_SNACK, ADD_XP } from '../constants/types';

let attempts = 1;
const MAX_ATTEMPTS = 5;

/*
 * IMPORTANT:
 * This function should still be invoked even if snackId is undefined or null
 * Otherwise, the next games will not award any XP
 */

export const feedSnack = snackId => async (dispatch, getState) => {
  const { game } = getState();

  try {
    const body = await window.request({
      method: 'POST',
      uri: USE_PET_SNACK,
      form: { ...game, ...commonForm, snackId }
    });

    const gameData = parse(body).UsePetSnackResponse;

    if (gameData.Status.Msg === 'Success') {
      attempts = 0;

      store.dispatch(handlePetRewards(gameData));

      dispatch({ type: ADD_XP, payload: gameData.AttrGains.Exp });

      if (snackId) dispatch({ type: SUBTRACT_SNACK, payload: snackId });
      return Promise.resolve(gameData.AttrGains.Exp);
    } else {
      let errorMessage = `${gameData.Status.Msg} - ${gameData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    if (attempts < MAX_ATTEMPTS) {
      attempts++;
      return Promise.resolve(store.dispatch(feedSnack(snackId)));
    } else {
      attempts = 0;
      return Promise.reject(error);
    }
  }
};
