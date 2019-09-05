import { SET_ACTIVE_PET, CLEAR_ACTIVE_PET } from '../constants/types';

const initialState = {
  PetId: '0',
  DisplayName: '?????',
  PetName: 'Unknown Pet',
  Exp: '0',
  ExpNextLevel: '0',
  PetLevel: '0',
  Strength: '0',
  Agility: '0',
  Will: '0',
  Power: '0',
  MaxStr: '0',
  MaxAgi: '0',
  MaxWil: '0',
  MaxInt: '0',
  MaxPow: '0',
  Talent: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_PET:
      return payload;
    case CLEAR_ACTIVE_PET:
      return initialState;
    default:
      return state;
  }
}
