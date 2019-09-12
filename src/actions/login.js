import parse from '../util/parse';
import retry from 'p-retry';
import sanitize from '../util/sanitize';
import store from '../store';
import { unlockMaps } from '../util/unlockMaps';
import { LOGIN_MINIGAME } from '../constants/endpoints';
import { validateSession } from './validateSession';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REQUEST_NEW_TOKEN,
  ACKNOWLEDGE_TOKEN,
  LOAD_CHARACTERS,
  LOAD_INVENTORY,
  LOAD_MAPS,
  LOAD_CROWNS,
  SET_CSID,
  SET_INTERVAL_POINTER
} from '../constants/types';
import {
  MINIGAME_ID,
  UDID,
  PLATFORM,
  TOKEN_REFRESH_RATE
} from '../constants/minigame';

export const login = (username, password) => async (dispatch, getState) => {
  let { account } = getState();

  const form = {
    password: password,
    minigameId: MINIGAME_ID,
    username: username,
    udid: UDID,
    platform: PLATFORM
  };

  try {
    console.log('Attempting Login...');

    const body = await window.request({
      method: 'POST',
      uri: LOGIN_MINIGAME,
      form
    });

    let data = parse(body).LoginMinigameResponse;

    if (data.Status.Msg === 'Success') {
      console.log('Successfully logged in ');

      if (!account.initialFetched) {
        // MapsCompleted on initial login will ensure that all core maps are unlocked
        try {
          await unlockMaps();
          console.log('MapsCompleted check succeeded');
        } catch (error) {
          console.error('MapsCompleted failed');
        }

        const pointer = setInterval(async () => {
          //console.log('Token marked as expired. New CSID requested.');
          //dispatch({ type: REQUEST_NEW_TOKEN, payload: pointer });
          try {
            await store.dispatch(validateSession());
          } catch (error) {
            console.log(error);
          }
        }, TOKEN_REFRESH_RATE);

        dispatch({ type: SET_INTERVAL_POINTER, payload: pointer });
      }

      // Dispatch reducer for account data
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { username, password }
      });

      // Dispatch multiple reducers for user data
      dispatch({
        type: SET_CSID,
        payload: data.CSID
      });

      dispatch({
        type: LOAD_CHARACTERS,
        payload: sanitize(data.CharacterData)
      });

      /* dispatch({
        type: LOAD_INVENTORY,
        payload: sanitize(data.Inventory.Item)
      });

      dispatch({
        type: LOAD_MAPS,
        payload: sanitize(data.Inventory.Item)
          .filter(item => item.ItemType === 'MAP_PACK')
          .map(maps => maps.Sku)
      });

      dispatch({
        type: LOAD_CROWNS,
        payload: data.Inventory.Crowns
      });*/

      dispatch({ type: ACKNOWLEDGE_TOKEN });

      return Promise.resolve(data);
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
      if (data.Status.Msg.toLowerCase().indexOf('quarantined') > -1)
        return Promise.reject(
          'Please complete a captcha on the Wizard101 site before continuing'
        );
      return Promise.reject(data.Status.Msg + ' - ' + data.Status.Content);
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    console.log(error);
    return Promise.resolve(store.dispatch(login(username, password)));
  }
};
