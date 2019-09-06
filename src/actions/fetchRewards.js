import validateScore from '../util/validateScore';
import parse from '../util/parse';
import store from '../store';
import { handlePetRewards } from './handlePetRewards';
import commonForm from '../constants/minigame';
import { GET_PET_TRAINING_REWARDS } from '../constants/endpoints';

export const fetchPetRewards = () => async (dispatch, getState) => {
  // charId, petId, csid, mapId from state.game
  const { game } = getState();

  const score = Math.floor(Math.random() * 2001 + 1e4).toString();

  const form = {
    ...game,
    ...commonForm,
    ...validateScore(score, game.mapId)
  };
  console.log('current form', form);

  try {
    console.log('fetching rewards with ', game);
    const body = await window.request({
      method: 'POST',
      uri: GET_PET_TRAINING_REWARDS,
      form
    });

    const rewardData = parse(body).GetPetTrainingRewardsResponse;

    console.log(rewardData);

    if (rewardData.Status.Msg === 'Success') {
      //store.dispatch(handlePetRewards(rewardData));
      return Promise.resolve(rewardData.AttrGains.Exp);
    } else {
      let errorMessage = `${rewardData.Status.Msg} - ${rewardData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      return Promise.resolve(store.dispatch(fetchPetRewards()), 2000);
    });
  }

  /* return setTimeout(
      () => Promise.resolve(store.dispatch(fetchPetRewards())),
    );*/
};
