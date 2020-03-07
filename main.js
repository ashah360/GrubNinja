require('dotenv').config();

const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const Store = require('electron-store');
const path = require('path');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

//const updater = require(path.join(__dirname, 'auto-updater.js'));

const store = new Store();

let mainWindow;

process.env.NODE_ENV = 'production';
process.env.CLIENT_MODE = 'mobile'; // web/mobile headers and payloads

function init() {
  console.info(`App version: ${app.getVersion()}`);

  //updater.init();

  mainWindow = new BrowserWindow({
    width: 1120,
    height: 750,
    backgroundColor: '#1B1B1D',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
    show: false
  });

  mainWindow.loadURL(
    process.env.NODE_ENV === 'dev'
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '/build/index.html')}`
  );

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();

    if (process.env.NODE_ENV !== 'production')
      mainWindow.webContents.openDevTools({ mode: 'detach' });

    mainWindow.webContents.send('version', app.getVersion());
  });

  ipcMain.on('request-metrics', () => {
    const expTrained = store.get('expTrained', 0);
    const petsLeveled = store.get('petsLeveled', 0);
    const items = store.get('generatedItems', []);

    mainWindow.webContents.send('load-metrics', {
      expTrained,
      petsLeveled,
      items: items
    });
  });

  ipcMain.on('save-gen-metric', (event, payload) => {
    store.set('generatedItems', payload);
  });

  ipcMain.on('save-exp-metric', (e, exp) => store.set('expTrained', exp));

  ipcMain.on('save-pets-leveled-metric', (e, n) => store.set('petsLeveled', n));

  ipcMain.on('save-account-details', (event, payload) => {
    store.set('username', payload.username);
    store.set('password', payload.password);
  });

  ipcMain.on('request-saved-account', () => {
    const username = store.get('username', '');
    const password = store.get('password', '');

    mainWindow.webContents.send('load-saved-account', { username, password });
  });

  ipcMain.on('save-webhook', (event, uri) => store.set('webhook', uri));

  ipcMain.on('request-webhook', () =>
    mainWindow.webContents.send('receive-webhook', store.get('webhook', ''))
  );

  ipcMain.on('openUrl', (e, url) => {
    if (url !== mainWindow.webContents.getURL()) {
      e.preventDefault();

      electron.shell.openExternal(url);
    }
  });

  ipcMain.on('init:launch', () => {
    switch (process.platform) {
      case 'win32':
      case 'win64':
        launch();
        mainWindow.webContents.send('showNotif', 'Launching Game', 'info');
        break;

      default:
        mainWindow.webContents.send(
          'showNotif',
          'This feature is only supported on Windows',
          'danger'
        );
    }
  });

  ipcMain.on('exit', e => {
    process.exit();
  });

  ipcMain.on('minimize', e => {
    mainWindow.minimize();
  });
}

async function launch() {
  try {
    await exec(
      'cd C:\\ProgramData\\KingsIsle Entertainment\\Wizard101\\Bin && WizardGraphicalClient.exe -L login.us.wizard101.com 12000 -A English && GOTO:EOF && EXIT /B n'
    );
  } catch (error) {
    console.error(error);

    mainWindow.webContents.send('showNotif', `Failed to launch game`, 'danger');
  }
}

app.on('ready', init);
