const {Menu,Tray} = require('electron');
const path = require('path');
let appIcon = null;

appIcon = new  Tray(path.join(__dirname,'./lover.jpg'))

const menu = Menu.buildFromTemplate([{
    label: '关闭',
    click: function(){
         appIcon.destroy();
    }
}])

appIcon.setToolTip('我最爱的app');
appIcon.setContextMenu(menu);