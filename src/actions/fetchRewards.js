import validateScore from '../util/validateScore';
import parse from '../util/parse';
import store from '../store';
import sanitize from '../util/sanitize';
import commonForm from '../constants/minigame';
import { LOAD_SNACKS, LOAD_GENERATOR_ITEMS } from '../constants/types';
import { GAME_NAME } from '../constants/minigame';
import {
  GET_PET_TRAINING_REWARDS,
  PROCESS_HIGH_SCORE
} from '../constants/endpoints';

export const fetchPetRewards = () => async (dispatch, getState) => {
  const { game } = getState();
  const score = Math.floor(Math.random() * 2001 + 1e4).toString();

  try {
    const body = await window.request({
      method: 'POST',
      uri: GET_PET_TRAINING_REWARDS,
      form: {
        ...game,
        ...commonForm,
        ...validateScore(score, game.mapId)
      }
    });

    const rewardData = parse(body).GetPetTrainingRewardsResponse;

    if (rewardData.Status.Msg === 'Success') {
      // Update snack data in state
      if (rewardData.SnackData)
        dispatch({ type: LOAD_SNACKS, payload: rewardData.SnackData });
      return Promise.resolve(rewardData.AttrGains.Exp);
    } else {
      let errorMessage = `${rewardData.Status.Msg} - ${rewardData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      return Promise.resolve(store.dispatch(fetchPetRewards()));
    });
  }
};

export const fetchGeneratorRewards = score => async (dispatch, getState) => {
  const { game } = getState();

  try {
    const body = await window.request({
      method: 'POST',
      uri: PROCESS_HIGH_SCORE,
      form: {
        ...game,
        ...commonForm,
        ...validateScore(score, game.mapId),
        gameLevel: game.mapId
      }
    });

    const rewardData = parse(body).ProcessHighscoreAndRewardResponse;

    if (rewardData.Status.Msg === 'Success') {
      // Update rewards in state
      // TODO: Convert rewards to to custom object format
      // { item, type, timestamp }
      //dispatch({ type: LOAD_GENERATOR_ITEMS, payload: null });
    } else {
      let errorMessage = `${rewardData.Status.Msg} - ${rewardData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      return Promise.resolve(store.dispatch(fetchPetRewards()));
    });
  }
};
