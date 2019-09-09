const https = require('https');
const request = require('request-promise');

const agent = new https.Agent({ keepAlive: true });
const jar = request.jar();

window.ipcRenderer = require('electron').ipcRenderer;
window.request = request.defaults({
  agent,
  jar,
  rejectUnauthorized: false, // ignore self-signed certs because KI is garbage
  insecure: true
});
