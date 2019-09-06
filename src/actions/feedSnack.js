import store from '../store';
import parse from '../util/parse';
import { handlePetRewards } from './handlePetRewards';
import commonForm from '../constants/minigame';
import { USE_PET_SNACK } from '../constants/endpoints';
import { fetchSnacks } from '../actions/fetchSnacks';

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
      console.log('Successfully obtained fed pet snack');
      console.log(gameData);
      store.dispatch(handlePetRewards(gameData));
      store.dispatch(fetchSnacks());
      return Promise.resolve(gameData.AttrGains.Exp);
    } else {
      let errorMessage = `${gameData.Status.Msg} - ${gameData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      return Promise.resolve(store.dispatch(feedSnack()), 5000);
    });
  }
};
