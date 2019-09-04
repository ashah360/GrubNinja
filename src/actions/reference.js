const request = require('request-promise');
const parser = require('fast-xml-parser');

// THIS CODE LITERALLY WORKS
// SO WHY TF
// CAN I NOT GET THIS EXACT THING
// TO WORK WITH REACT

const login = async function(username, password) {
  let uri =
    'https://www.freekigames.com/rest/external/minigame/MinigameClientService/loginMinigame';
  let form = {
    password: password,
    minigameId: 'GrubGuardian',
    username: username,
    udid: '',
    platform: 'web'
  };

  try {
    let body = await request({ method: 'POST', uri, jar: this._jar, form });

    let data = parser.parse(body, {
      parseNodeValue: false
    }).LoginMinigameResponse;

    if (data.Status.Msg === 'Success') {
      // Attach jar so that it can be used for all subsequent requests
      console.log('Successfully logged in');
      this.gameState.csid = data.CSID;
      this.characters = this.sanitize(data.CharacterData);
      this.inventory = this.sanitize(data.Inventory.Item);
      return Promise.resolve(data);
    } else {
      return Promise.reject(data.Status.Msg + ' - ' + data.Status.Content);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { login };