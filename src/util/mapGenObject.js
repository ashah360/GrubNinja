import unescape from './unescape';

// Using very shitty methods to determine reward type
// Don't do this in a prod setting kids
const determineType = name => {
  name = name.toLowerCase();
  if (name.indexOf('elixir') > -1) {
    return 'Elixir';
  } else if (name.indexOf('housing') > -1 || name.indexOf('decoration') > -1) {
    return 'Housing';
  } else if (name.indexOf('pack') > -1) {
    return 'Pack';
  } else if (name.indexOf('gold') > -1) {
    return 'Gold';
  } else if (name.indexOf('snack') > -1) {
    return 'Snack';
  } else if (name.indexOf('reagent') > -1) {
    return 'Reagent';
  } else if (name.indexOf('pet') > -1) {
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
