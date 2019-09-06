import parser from 'fast-xml-parser';
import sanitize from '../util/sanitize';
import headers from '../constants/headers';
import store from '../store';
import { LOAD_SNACKS } from '../constants/types';
import { BUY_SNACK_PACK } from '../constants/endpoints';
import { PLATFORM, MINIGAME_ID } from '../constants/minigame';

// Get current snacks by sending request to buySnackPack with qty of 0
export const fetchSnacks = () => async (dispatch, getState) => {
  const { game } = getState();

  const form = {
    saleId: '0',
    price: '0',
    templateId: '0',
    platform: PLATFORM,
    minigameId: MINIGAME_ID,
    charId: game.charId,
    csid: game.csid
  };

  try {
    const body = await window.request({
      method: 'POST',
      uri: BUY_SNACK_PACK,
      form
    });

    let data = parser.parse(body, {
      parseNodeValue: false
    }).BuyPetSnackPackResponse;

    if (data.SnackData) {
      dispatch({
        type: LOAD_SNACKS,
        payload: sanitize(data.SnackData)
      });
    }

    console.log(data);
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    return Promise.resolve(store.dispatch(fetchSnacks()));
  }
};
