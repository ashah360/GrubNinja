const request = require('request-promise');

const jar = request.jar();

window.ipcRenderer = require('electron').ipcRenderer;
window.request = request.defaults({
  jar,
  rejectUnauthorized: false, // ignore self-signed certs because KI is garbage
  insecure: true,
  headers:
    process.env.CLIENT_MODE === 'mobile'
      ? {
          Referer: 'app:/PetDefense_iOS.swf',
          'User-Agent':
            'Mozilla/5.0 (iOS; U; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) AdobeAIR/19.0'
        }
      : { Referer: 'https://www.freekigames.com/grub-guardian' }
});
