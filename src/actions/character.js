import parse from '../util/parse';
import sanitize from '../util/sanitize';
import store from '../store';
import { login } from './login';
import { fetchSnacks } from './fetchSnacks';
import { GET_PET_LIST } from '../constants/endpoints';
import { MINIGAME_ID } from '../constants/minigame';
import {
  LOAD_CHARACTER_DATA,
  LOAD_PETS,
  SET_ACTIVE_PET,
  SET_CHAR_ID,
  SET_PET_ID
} from '../constants/types';

// set data for the specified character in the character.data state
export const setCharacter = id => (dispatch, getState) => {
  const {
    user: { characters }
  } = getState();

  dispatch({
    type: LOAD_CHARACTER_DATA,
    payload: characters.find(char => char.CharId === id) || null
  });

  dispatch({
    type: SET_CHAR_ID,
    payload: id
  });

  store.dispatch(fetchSnacks());
};

export const setPet = id => (dispatch, getState) => {
  const {
    character: { pets }
  } = getState();

  dispatch({
    type: SET_PET_ID,
    payload: id
  });

  const payload = pets.find(pet => pet.PetId === id) || {};

  // fallback in case talent object not attached
  if (typeof payload.Talent === 'undefined') {
    payload.Talent = [];
  }

  payload.Talent = sanitize(payload.Talent);

  dispatch({
    type: SET_ACTIVE_PET,
    payload
  });

  //store.dispatch(generateGameId());
};

export const getPetList = () => async (dispatch, getState) => {
  const { session, character, game } = getState();

  let form = {
    charId: character.data.CharId,
    minigameId: MINIGAME_ID,
    csid: game.csid
  };

  try {
    let body = await window.request({
      method: 'POST',
      uri: GET_PET_LIST,
      form
    });

    let petData = parse(body).GetPetListResponse;

    if (petData.Status.Msg === 'Success') {
      dispatch({
        type: LOAD_PETS,
        payload: sanitize(petData.PetData)
      });

      return Promise.resolve(petData.PetData);
    } else {
      return Promise.reject(
        petData.Status.Msg + ' - ' + petData.Status.Content
      );
    }
  } catch (error) {
    console.error(error);
    return Promise.resolve(store.dispatch(getPetList()));
  }
};
