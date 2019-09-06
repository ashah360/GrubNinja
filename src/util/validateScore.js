import crypto from 'crypto';
import uuidv4 from 'uuid/v4';

import { GAME_NAME, GAME_TIME } from '../constants/minigame';

const createHash = input =>
  crypto
    .createHash('md5')
    .update(input)
    .digest('hex')
    .toString();

export default (score, mapId) => {
  let guid = createHash(uuidv4()).toLowerCase();
  let gameCheck = createHash(
    GAME_NAME + score + guid + GAME_TIME + mapId
  ).toLowerCase();
  let cipher = `${guid}${'0'.repeat(68)}`;
  let seed = score;

  let char;
  let charInt = 0;

  for (let i = score.length - 1; i >= 0; i -= 1) {
    char = score[i].toString();
    charInt = parseInt(char);
    seed += cipher[charInt];
  }

  let hash = createHash(seed).toLowerCase();

  return {
    score,
    cipher,
    hash,
    guid,
    gameCheck
  };
};
