import request from 'request-promise';
import parser from 'fast-xml-parser';
import sanitize from '../util/sanitize';
import { LOGIN_EP } from '../constants/endpoints';
import {
  SET_CSID,
  LOAD_CHARACTERS,
  LOAD_INVENTORY,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/types';

// Login with username and password
export const login = ({ username, password }) => async dispatch => {
  let jar = request.jar();
  const uri = 'https://cors-anywhere.herokuapp.com/' + LOGIN_EP;
  const form = {
    password: password,
    minigameId: 'GrubGuardian',
    username: username,
    udid: '',
    platform: 'web'
  };

  try {
    console.log('trying login');
    const body = await request({ method: 'POST', uri, jar, form });

    let data = parser.parse(body, {
      parseNodeValue: false
    }).LoginMinigameResponse;

    if (data.Status.Msg === 'Success') {
      // Attach jar so that it can be used for all subsequent requests
      console.log('Successfully logged in');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { username, password }
      });
      dispatch({
        type: SET_CSID,
        payload: data.CSID
      });
      dispatch({
        type: LOAD_CHARACTERS,
        payload: sanitize(data.CharacterData)
      });
      dispatch({
        type: LOAD_INVENTORY,
        payload: sanitize(data.Inventory.Item)
      });
      return Promise.resolve(data);
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
      return Promise.reject(data.Status.Msg + ' - ' + data.Status.Content);
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    return Promise.reject(error);
  }
};
