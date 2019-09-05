import parser from 'fast-xml-parser';
import sanitize from '../util/sanitize';
import headers from '../constants/headers';
import store from '../store';
import { fetchSnacks } from './fetchSnacks';
import { GET_PET_LIST } from '../constants/endpoints';
import { MINIGAME_ID } from '../constants/minigame';
import {
  LOAD_CHARACTER_DATA,
  LOAD_PETS,
  SET_ACTIVE_PET,
  SET_CHAR_ID,
  SET_JAR
} from '../constants/types';

/**
 * @function setCharacter
 * @function getPetList
 * @function getSnacks
 * @function buyEnergy
 */

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
};

export const getPetList = () => async (dispatch, getState) => {
  const { session, character, game } = getState();

  let jar = session;

  let form = {
    charId: character.data.CharId,
    minigameId: MINIGAME_ID,
    csid: game.csid
  };

  try {
    let body = await window.request({
      method: 'POST',
      uri: GET_PET_LIST,
      jar,
      form
    });

    dispatch({
      type: SET_JAR,
      payload: jar
    });

    let petData = parser.parse(body, {
      parseNodeValue: false
    }).GetPetListResponse;

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
