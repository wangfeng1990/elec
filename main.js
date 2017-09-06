const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
   // 创建窗口并加载页面
  mainWindow = new BrowserWindow({width: 800, height: 600})

  const URL = url.format({
    pathname: path.join(__dirname, 'index.html'),
    // 协议
    protocol: 'file:',
    // 是否有斜杠
    slashes: true
  })
  // and load the index.html of the app.
  mainWindow.loadURL(URL);
mainWindow.webContents.openDevTools()//开启调试工具
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // 窗口关闭监听
  mainWindow.on('closed', function () {
    //win对象：是你应用的主窗口，被声明成null，否则当JavaScript垃圾回收掉这个对象时，窗口会被关闭。
    mainWindow = null
  })
//当应用捕获resize事件，BrowserWindow会重新加载
  mainWindow.on('resize', () => {
      mainWindow.reload()
  })

  // require('./main-process/menu.js')
  // require('./main-process/msg-a.js')
  //  require('./main-process/tray.js')
  // require('./main-process/dialog.js')
}


// 这个是设置快捷键，不能放在createWindow 里面
require('./main-process/shortcut.js')
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

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
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
