// Minigame form constants
export const MINIGAME_ID = 'GrubGuardian';
export const PLATFORM =
  process.env.CLIENT_MODE === 'web'
    ? 'web'
    : 'iPhone OS 13.3.1 iPhone10,4_Adobe iOS_app';
export const GAME_TIME = '172622';
export const VERSION = '4';
export const UDID = '';
export const WAVE = '0';
export const IS_COMPLETE = '1';
export const GAME_NAME = 'GrubGuardian';
export const PLAY_RESULT = 'GOLD';
export const GAME_LEVELS =
  'MAP-TU-003,MAP-TU-004,MAP-KT-003,MAP-PA-002,MAP-PA-001,MAP-PA-004,MAP-PA-003,MAP-TU-001,MAP-TU-002,MAP-WC-004,MAP-WC-003,MAP-WC-002,MAP-WC-001,MAP-CL-004,MAP-CL-003,MAP-MS-002,MAP-MS-003,MAP-MS-001,MAP-DS-003,MAP-DS-004,MAP-DS-001,MAP-CL-002,MAP-DS-002,MAP-CL-001,MAP-ZF-004,MAP-ZF-002,MAP-AZ-004,MAP-ZF-003,MAP-AZ-003,MAP-ZF-001,MAP-AZ-002,MAP-AZ-001,MAP-MB-003,MAP-AV-003,MAP-AV-004,MAP-AV-001,MAP-AZ-002.MAP-AZ-003.MAP-AZ-004,MAP-AV-002,MAP-MB-002,MAP-KT-002,MAP-MB-001,MAP-KT-001';

// CSID refresh rate
export const TOKEN_REFRESH_RATE = 30000;

// Energy elixir product template
export const ENERGY_ELIXIR_TEMPLATE = {
  saleId: '131',
  price: '250',
  templateId: '225110'
};

// Common form for most game-related requests
const commonForm = {
  minigameId: MINIGAME_ID,
  platform: PLATFORM,
  gameTime: GAME_TIME,
  versionNumber: VERSION,
  udid: UDID,
  wave: WAVE,
  isComplete: IS_COMPLETE,
  gameName: GAME_NAME,
  playResult: PLAY_RESULT
};

export default commonForm;
