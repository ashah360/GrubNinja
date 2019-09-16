const request = require('request-promise');

const jar = request.jar();

window.ipcRenderer = require('electron').ipcRenderer;
window.request = request.defaults({
  jar,
  rejectUnauthorized: false, // ignore self-signed certs because KI is garbage
  insecure: true
});
