const {ipcMain} = require('electron');

//进程间同步通信
// ipcMain 监听事件msg-a,监听到则触发回调
ipcMain.on('msg-a',(event)=>{
    event.returnValue = 'Hello';
})

//进程间异步通信(主进程与子渲染进程间的通信)
ipcMain.on('msg-a-1',(event,args)=>{
    console.log(args.name);
    event.sender.send('msg-a-1-back',{name:'yugo'});
})