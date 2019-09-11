import {
  SET_ACTIVE_PET,
  CLEAR_ACTIVE_PET,
  UPDATE_ACTIVE_PET
} from '../constants/types';

const initialState = {
  PetId: '0',
  DisplayName: '?????',
  PetName: 'Unknown Pet',
  Exp: '1',
  ExpNextLevel: '1000',
  PetLevel: '1',
  Strength: '1',
  Agility: '1',
  Will: '1',
  Intellect: '1',
  Power: '1',
  MaxStr: '100',
  MaxAgi: '100',
  MaxWil: '100',
  MaxInt: '100',
  MaxPow: '100',
  Talent: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_PET:
      return payload;
    case CLEAR_ACTIVE_PET:
      return initialState;
    case UPDATE_ACTIVE_PET:
      return { ...state, ...payload };
    default:
      return state;
  }
}
