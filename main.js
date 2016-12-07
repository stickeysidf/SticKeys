const electron = require('electron')
const fs = require('fs');

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const pug = require('electron-pug')({pretty: true}, { 
  ides:[ 'Visual Studio Code', 'Android Studio'],
  actions: ["Step Over", "Step Into", "Step Out"]
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
var backgroundColor = '#fff'

function createWindow () {
  const userAgent = '(Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36';
  const rammeDesktopIcon = path.join(__dirname, 'images/Icon.png');
  const maxWidthValue = 3000;
  const minWidthValue = 900;
  const maxHeighthValue = 1000;
  const minHeightValue = 660;
  
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: app.getName(),
    show: true,
    minWidth: minWidthValue,
    maxWidth: maxWidthValue,
    minHeight: minHeightValue,
    maxHeight: maxHeighthValue,
    width: minWidthValue,
    height: minHeightValue,
    icon: process.platform === 'linux' && sticKeysDesktopIcon,
    titleBarStyle: 'hidden-inset',
    backgroundColor: backgroundColor,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false
    }
  });

  mainWindow.webContents.setUserAgent(userAgent);

  mainWindow.loadURL(`file://${__dirname}/index.pug`);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.on('page-title-updated', e => {
    e.preventDefault();
  });

  return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  mainWindow = createWindow();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  const page = mainWindow.webContents;

  page.on('dom-ready', () => {
    page.insertCSS(fs.readFileSync(path.join(__dirname, '/css/browser.css'), 'utf8'));

    mainWindow.show();
  });

});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});