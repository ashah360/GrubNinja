import parse from '../util/parse';
import sanitize from '../util/sanitize';
import store from '../store';
import { LOAD_SNACKS } from '../constants/types';
import { BUY_SNACK_PACK } from '../constants/endpoints';
import { PLATFORM, MINIGAME_ID } from '../constants/minigame';

let attempts = 1;
const MAX_ATTEMPTS = 5;

const makeSnackRequest = async (options, maxAttempts, attempts = 0) => {
  if (attempts >= maxAttempts) {
    throw new Error('Max attempts reached');
  }

  try {
    const body = await window.request(options);

    let data = parse(body).BuyPetSnackPackResponse;

    if (data.SnackData) {
      return sanitize(data.SnackData);
    }
  }
  catch (err) {
    console.error(err);
  }

  return makeSnackRequest(options, maxAttempts, attempts++);
};

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
    const snackData = makeSnackRequest({
      method: 'POST',
      uri: BUY_SNACK_PACK,
      form
    }, MAX_ATTEMPTS);

    if (snackData) {
      dispatch({
        type: LOAD_SNACKS,
        payload: snackData
      });
    }
  }
  catch (err) {
    console.error(err);
  }
};
