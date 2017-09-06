const {app,globalShortcut,dialog} = require('electron');

app.on('ready',()=>{
    globalShortcut.register('ctrl+y',()=>{
        dialog.showMessageBox({
            message:'快捷键',
            type:'info',
            detail:'已经成功触发快捷点',
            buttons:['ok']
        })
    })
})

app.on('will-quit',()=>{
    globalShortcut.unregisterAll();

})