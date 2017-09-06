// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const click = document.querySelector('#click');

const path = require('path');

const BrowserWindow = require('electron').remote.BrowserWindow;

let win;

click.onclick = () => {
    // window.open('http://www.baidu.com');
    win = new BrowserWindow({
        width: 300,
        height: 200,
        frame: true,
        // false时，窗口头部没了
        // frame: false
        // 设置透明窗口
        transparent: true
    })

    win.on('close',() => {win = null;});


    win.loadURL(path.join('file:',__dirname, '../module.html'))
    // open('./module.html')
    console.dir(window)
}