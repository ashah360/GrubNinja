import parser from 'fast-xml-parser';
import store from '../store';
import { START_MINIGAME } from '../constants/endpoints';
import commonForm from '../constants/minigame';
import { SET_GAME_ID } from '../constants/types';
import { login } from './login';

let attempts = 1;
const MAX_ATTEMPTS = 5;

// Generate game session with current game state from redux store
export const generateGameId = () => async (dispatch, getState) => {
  const { account, game } = getState();

  try {
    if (account.tokenRefreshRequired)
      store.dispatch(login(account.username, account.password));

    let body = await window.request({
      method: 'POST',
      uri: START_MINIGAME,
      form: { ...game, ...commonForm }
    });

    let gameData = parser.parse(body, {
      parseNodeValue: false
    }).StartMinigameResponse;

    if (gameData.Status.Msg === 'Success') {
      attempts = 0;
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
    if (attempts < MAX_ATTEMPTS) {
      attempts++;
      return Promise.resolve(store.dispatch(generateGameId()));
    } else {
      attempts = 0;
      return Promise.reject(error);
    }
  }
};
