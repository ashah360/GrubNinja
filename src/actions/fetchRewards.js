import validateScore from '../util/validateScore';
import parse from '../util/parse';
import store from '../store';
import sanitize from '../util/sanitize';
import { buildRewardObject } from '../util/mapGenObject';
import commonForm from '../constants/minigame';
import { handlePetRewards } from './handlePetRewards';
import { LOAD_SNACKS, LOAD_GENERATOR_ITEMS, ADD_XP } from '../constants/types';
import { login } from './login';
import {
  GET_PET_TRAINING_REWARDS,
  PROCESS_HIGH_SCORE
} from '../constants/endpoints';

let attempts = 0;
const MAX_ATTEMPTS = 5;

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
      store.dispatch(handlePetRewards(rewardData));
      // Update snack data in state
      if (rewardData.SnackData)
        dispatch({
          type: LOAD_SNACKS,
          payload: sanitize(rewardData.SnackData)
        });
      attempts = 0;
      dispatch({ type: ADD_XP, payload: rewardData.AttrGains.Exp });
      return Promise.resolve(rewardData.AttrGains.Exp);
    } else {
      let errorMessage = `${rewardData.Status.Msg} - ${rewardData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    if (attempts < MAX_ATTEMPTS) {
      attempts++;
      return Promise.resolve(store.dispatch(fetchPetRewards()));
    } else {
      attempts = 0;
      return Promise.reject(error);
    }
  }
};

export const fetchRewards = score => async (dispatch, getState) => {
  const { account, game } = getState();

  if (account.tokenRefreshRequired)
    await store.dispatch(login(account.username, account.password));

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
      attempts = 0;
      // Build object
      const payload = sanitize(rewardData.Reward).map(reward =>
        buildRewardObject(reward, game.mapId, score)
      );
      // Update rewards in state
      console.log('Updating rewards in state');
      dispatch({ type: LOAD_GENERATOR_ITEMS, payload });
    } else {
      let errorMessage = `${rewardData.Status.Msg} - ${rewardData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    if (attempts < MAX_ATTEMPTS) {
      attempts++;
      return Promise.resolve(store.dispatch(fetchRewards()));
    } else {
      attempts = 0;
      return Promise.reject(error);
    }
  }
};
