import parse from '../util/parse';
import { BUY_ENERGY_ELIXIR } from '../constants/endpoints';
import {
  MINIGAME_ID,
  PLATFORM,
  ENERGY_ELIXIR_TEMPLATE
} from '../constants/minigame';
import { LOAD_CHARACTER_DATA } from '../constants/types';

// For the rich wizheads
export const buyEnergy = () => async (dispatch, getState) => {
  const {
    game: { charId, csid }
  } = getState();

  try {
    console.log('Attempting ot buy energy');
    const body = await window.request({
      method: 'POST',
      uri: BUY_ENERGY_ELIXIR,
      form: {
        charId,
        csid,
        minigameId: MINIGAME_ID,
        platform: PLATFORM,
        ...ENERGY_ELIXIR_TEMPLATE
      }
    });
    if (body.indexOf('FAIL=User not Authenticated') > -1) {
      return Promise.reject('User authentication failed. Please login again.');
    }

    const response = parse(body).BuyEnergyElixirResponse;

    if (response.Status.Msg === 'Success') {
      dispatch({ type: LOAD_CHARACTER_DATA, payload: response.CharacterData });
      return Promise.resolve();
    }  

    return Promise.reject(response.Status.Msg);
  } catch (error) {
    console.error(error);
    return Promise.reject('An error occured. Could not buy Energy Elixir');
  }
};
