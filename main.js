const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const Store = require('electron-store');
const path = require('path');

const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer');

// Appdata manager
const store = new Store();

let mainWindow;

process.env.NODE_ENV = 'dev';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 750,
    backgroundColor: '#1B1B1D',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    },
    frame: false,
    show: false
  });

  /*
  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
    */

  mainWindow.loadURL(
    process.env.NODE_ENV === 'dev'
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    if ((process.env.NODE_ENV = 'dev'))
      mainWindow.webContents.openDevTools({ mode: 'detach' });
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

  ipcMain.on('closeApp', e => {
    console.log('Got called to close the app');
    e.preventDefault();
    process.exit();
  });
}

app.on('ready', createWindow);
