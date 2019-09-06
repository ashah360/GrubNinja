import parser from 'fast-xml-parser';
import store from '../store';
import { START_MINIGAME } from '../constants/endpoints';
import commonForm from '../constants/minigame';
import { fetchPetRewards } from './fetchRewards';
import { SET_GAME_ID } from '../constants/types';

// Generate game session with current game state from redux store
export const generateGameId = () => async (dispatch, getState) => {
  const { game } = getState();

  try {
    let body = await window.request({
      method: 'POST',
      uri: START_MINIGAME,
      form: { ...game, ...commonForm }
    });

    let gameData = parser.parse(body, {
      parseNodeValue: false
    }).StartMinigameResponse;

    if (gameData.Status.Msg === 'Success') {
      dispatch({
        type: SET_GAME_ID,
        payload: gameData.CurrentGameId
      });

      //store.dispatch(fetchPetRewards());
      return Promise.resolve();
    } else {
      let errorMessage = `${gameData.Status.Msg} - ${gameData.Status.Content}`;
      console.error(errorMessage);
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    console.error(error);
    return Promise.resolve(store.dispatch(generateGameId()));
  }
};
