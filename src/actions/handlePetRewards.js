import sanitize from '../util/sanitize';
import {
  LOAD_CHARACTER_DATA,
  UPDATE_PET,
  UPDATE_ACTIVE_PET
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
  if (data.AttrGains && data.AttrGains.Exp > 0) {
    // fallback in case talent object not attached
    if (typeof petData.Talent === 'undefined') {
      petData.Talent = [];
    }

    petData.Talent = sanitize(petData.Talent);

    dispatch({
      type: UPDATE_PET,
      payload: petData
    });

    dispatch({
      type: UPDATE_ACTIVE_PET,
      payload: petData
    });
  }
};
