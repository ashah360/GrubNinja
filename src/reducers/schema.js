// Redux state schema

// We want to re-use a cookie jar so that our session is maintained
const session = {}; // request.jar()

// Account and auth details
const account = {
  username: null, // username
  password: null, // password
  isLoggedIn: false, // bool
  tokenRefreshRequired: false,
  loading: true // bool (handles loading animations)
};

// One-time storage
const user = {
  characters: [],
  inventory: [],
  maps: [],
  crowns
};

// Dynamic storage
const character = {
  charId: '',
  pets: [],
  snacks: []
};

// Active pet
const pet = {
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
