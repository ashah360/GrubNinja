const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');

const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer');

let mainWindow;

process.env.NODE_ENV = 'dev';

/**
 * createWindow - Creates the initial browser window for the app.
 * @return {null}
 */
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

  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));

  // set the view for the window, by either going to localhost:3000
  // or if in production, grabbing the build file
  mainWindow.loadURL(
    process.env.NODE_ENV === 'dev'
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // once the window is ready show it
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    if ((process.env.NODE_ENV = 'dev'))
      mainWindow.webContents.openDevTools({ mode: 'detach' });
  });

  // when renderer sends closeApp to to main, exit the process.
  ipcMain.on('closeApp', e => {
    console.log('Got called to close the app');
    e.preventDefault();
    process.exit();
  });
}

app.on('ready', createWindow);
