import parse from '../util/parse';
import { GAME_LEVELS, MINIGAME_ID } from '../constants/minigame';
import { MAPS_COMPLETED } from '../constants/endpoints';

// No need to make this a redux action because it only relies on cookeis
export const unlockMaps = async () => {
  try {
    const body = await window.request({
      method: 'POST',
      uri: MAPS_COMPLETED,
      form: { minigameId: MINIGAME_ID, gameLevels: GAME_LEVELS }
    });

    const response = parse(body).MapsCompletedResponse;

    if (response.Status.Msg === 'Success') Promise.resolve();
    else Promise.reject();
  } catch (error) {
    console.error(error);
    Promise.reject();
  }
};
