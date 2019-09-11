import { createSelector } from 'reselect';

const getCurrentPets = state => state.character.pets;
const getActivePetId = state => state.game.petId;

// Selector for TrainingCard view to avoid unnecessary redundancy with state
export const selectPetById = createSelector(
  [getCurrentPets, getActivePetId],
  (petList, petId) =>
    petList.find(pet => pet.PetId === petId) || {
      PetId: '0',
      DisplayName: '?????',
      PetName: 'Unknown Pet',
      Exp: '1',
      ExpNextLevel: '1000',
      PetLevel: '1',
      Strength: '1',
      Agility: '1',
      Intellect: '1',
      Will: '1',
      Power: '1',
      MaxStr: '100',
      MaxAgi: '100',
      MaxWil: '100',
      MaxInt: '100',
      MaxPow: '100',
      Talent: []
    }
);
