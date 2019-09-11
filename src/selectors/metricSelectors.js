import { createSelector } from 'reselect';

const getItems = state => state.metrics.items;

const getQuantity = (rewards, type) =>
  rewards
    .filter(r => r.type === type)
    .reduce((a, c) => a + parseInt(c.quantity), 0);

export const getTotalQuantities = createSelector(
  getItems,
  rewards => {
    return {
      Gold: getQuantity(rewards, 'Gold'),
      Packs: getQuantity(rewards, 'Pack'),
      Elixirs: getQuantity(rewards, 'Elixir')
    };
  }
);

export const getTotalRewardCount = createSelector(
  getItems,
  rewards => rewards.length
);
