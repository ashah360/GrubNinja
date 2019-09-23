import parse from '../util/parse';
import sanitize from '../util/sanitize';
import store from '../store';
import { LOAD_SNACKS } from '../constants/types';
import { BUY_SNACK_PACK } from '../constants/endpoints';
import { PLATFORM, MINIGAME_ID } from '../constants/minigame';

let attempts = 1;
const MAX_ATTEMPTS = 5;

// Get current snacks by "fake buying" snack pack
export const fetchSnacks = () => async (dispatch, getState) => {
  const {
    game: { charId, csid }
  } = getState();

  const form = {
    saleId: '0',
    price: '0',
    templateId: '0',
    platform: PLATFORM,
    minigameId: MINIGAME_ID,
    charId,
    csid
  };

  try {
    const body = await window.request({
      method: 'POST',
      uri: BUY_SNACK_PACK,
      form
    });

    let data = parse(body).BuyPetSnackPackResponse;

    if (data.SnackData) {
      dispatch({
        type: LOAD_SNACKS,
        payload: sanitize(data.SnackData)
      });

      return Promise.resolve(data);
    }

    return Promise.reject('Could not fetch snack data');
  } catch (error) {
    console.error(error);
    return Promise.resolve(store.dispatch(fetchSnacks()));
  }
};
