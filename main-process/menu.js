// 从electron中到如 menu(menu菜单)和app模块 ipcMain、BrowserWindow
const {Menu,app,ipcMain,BrowserWindow} = require('electron');

let template = [
    {
        label:'one',
        submenu:[
            {
                label: 'two'
            },
            {
                type:'separator'
            },
            {
                label:'haha',
                click:()=>{
                    console.log('jaja');
                }
            }
        ]
    },
    {
        label:'tt',
        submenu:[
            {
                label: 'tmmm'
            }
        ]
    }
];

let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// 设置显示右键菜单
ipcMain.on('show-context-menu',(e)=>{
    const win = BrowserWindow.fromWebContents(e.sender);
    menu.popup(win);
})