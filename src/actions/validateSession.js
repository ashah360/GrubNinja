import parse from '../util/parse';
import store from '../store';
import { REQUEST_NEW_TOKEN } from '../constants/types';
import { IS_SESSION_VALID } from '../constants/endpoints';
import { MINIGAME_ID } from '../constants/minigame';

export const validateSession = () => async (dispatch, getState) => {
  const {
    game: { csid }
  } = getState();

  try {
    console.log('Checking session validity');
    const body = await window.request({
      method: 'POST',
      uri: IS_SESSION_VALID,
      form: { csid, minigameId: MINIGAME_ID }
    });

    // 200 http status codes are thrown for everything. KI mad retarded
    if (body.toLowerCase().indexOf('not authenticated') > -1) {
      dispatch({ type: REQUEST_NEW_TOKEN });
      return Promise.reject();
    }

    const response = parse(body).SessionValidResponse;

    if (response.Status.Msg === 'Success') {
      // Our session is still valid
      console.log('Session is still valid!');
      return Promise.resolve();
    }

    // Our session isn't valid anymore
    dispatch({ type: REQUEST_NEW_TOKEN });
    console.log('Session is not valid.');
    return Promise.reject();
  } catch (error) {
    dispatch({ type: REQUEST_NEW_TOKEN });
    return Promise.reject(error);
  }
};
