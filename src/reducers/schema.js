// Redux state schema

// Account and auth details
const account = {
  username: null, // username
  password: null, // password
  isLoggedIn: false, // bool
  tokenRefreshRequired: false,
  session: {}, // request.jar()
  loading: true // bool (handles loading animations)
};

// One-time storage
const user = {
  characters: [],
  inventory: [],
  maps: []
};

// Dynamic storage
const character = {
  charId: '',
  pets: [],
  snacks: [],
  currentEnergy: '',
  maxEnergy: ''
};

// Active pet
const activePet = {
  // ...petData
};

// Game state
const game = {
  csid: '', // queue a refresh every 120s
  charId: '',
  petId: '',
  currentGameId: '',
  mapId: ''
};

const activePath = ''; // Component to render in main view
