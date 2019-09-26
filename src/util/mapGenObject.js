import unescape from './unescape';

// Using very shitty methods to determine reward type
// Don't do this in a prod setting kids
const determineType = name => {
  name = name.toLowerCase();
  if (name.includes('elixir')) {
    return 'Elixir';
  } else if (name.includes('housing') || name.includes('decoration')) {
    return 'Housing';
  } else if (name.includes('pack')) {
    return 'Pack';
  } else if (name.includes('gold')) {
    return 'Gold';
  } else if (name.includes('snack')) {
    return 'Snack';
  } else if (name.includes('reagent')) {
    return 'Reagent';
  } else if (name.includes('pet')) {
    return 'Pet';
  } else {
    return 'default';
  }
};

export const buildRewardObject = (reward, map, score) => {
  score = score.toString();
  const timestamp = Date.now();
  const type = determineType(reward.Name);
  const name =
    type !== 'Gold'
      ? unescape(reward.Name)
      : `${unescape(reward.Name)} (${reward.Quantity})`;
  const quantity = reward.Quantity;
  return { type, name, quantity, map, score, timestamp };
};
