const electron = require('electron');
const { autoUpdater, dialog } = electron;

const os = require('os');
const path = require('path');

const appVersion = require(path.join(__dirname, 'package.json')).version;

let initialized = false;

const platform = os.platform();
const updateURL = `https://updater.grubninja.now.sh/update/${platform}/${appVersion}`;
const updateCheckInterval = 10 * 60 * 1000; // Every 10 minutes

function init() {
  // Temporarily disable auto update
  return;

  console.info('Updater initialized');
  console.info('Using feed URL:', updateURL);
  console.info('NODE_ENV:', process.env.NODE_ENV);

  if (initialized || process.env.NODE_ENV !== 'production') return;

  initialized = true;

  autoUpdater.setFeedURL(updateURL);

  autoUpdater.on('error', (ev, err) => {
    console.error(err);
  });

  autoUpdater.once('checking-for-update', (ev, err) => {
    console.info('Checking for updates...');
  });

  autoUpdater.once('update-available', (ev, err) => {
    console.info('Update available');

    const options = {
      type: 'info',
      title: 'Update Downloading',
      message: 'A new update is available and is currently being downloaded.'
    };

    dialog.showMessageBox(null, options, () => {});
  });

  autoUpdater.once('update-not-available', (ev, err) => {
    console.info('Update not available');
  });

  autoUpdater.once('update-downloaded', (ev, err) => {
    const options = {
      type: 'question',
      buttons: ['Yes', 'No'],
      defaultId: 0,
      title: 'Update Downloaded',
      message:
        'A new update has been downloaded. Would you like to quit and install it?'
    };

    dialog.showMessageBox(null, options, response => {
      if (response === 0) {
        autoUpdater.quitAndInstall();
      }
    });
  });

  autoUpdater.checkForUpdates(); // so it fires the first time and doesn't wait
  setInterval(() => autoUpdater.checkForUpdates(), updateCheckInterval);
}

module.exports.init = init;
