import sanitize from '../util/sanitize';
import { sendImportant } from '../util/notify';
import {
  LOAD_CHARACTER_DATA,
  UPDATE_PET,
  ADD_PET_LEVEL
} from '../constants/types';

export const handlePetRewards = data => dispatch => {
  dispatch({
    type: LOAD_CHARACTER_DATA,
    payload: data.CharacterData
  });

  const petData = data.PetData;

  // delete name fields because they appear as empty strings in response
  delete petData.PetName;
  delete petData.DisplayName;

  // Only dispatch reducers if game actually caused any updates to pet data
  if (!!data.AttrGains && data.AttrGains.Exp > 0) {
    // fallback in case talent object not attached

    if (!!petData) {
      if (!petData.Talent) {
        petData.Talent = [];
      }

      petData.Talent = sanitize(petData.Talent);

      // Talent Detection
      if (data.AttrGains.Level > 0) {
        const abilities = petData.Talent;
        const ability = abilities[abilities.length - 1];
        sendImportant('Ability Unlocked', ability);
        dispatch({ type: ADD_PET_LEVEL });
      }

      dispatch({
        type: UPDATE_PET,
        payload: petData
      });
    }
  }
};
