const {dialog} = require('electron');
// 错误框
// dialog.showErrorBox('title','content');

//弹框
// dialog.showMessageBox({
//     type: 'info',
//     title: 'message',
//     message: 'hello',
//     buttons: ['对的','错的']
// },(index)=>{
//     if(index == 0){
//         console.log('您点了好的');
//     }else{
//         console.log('您点了错的按钮');
//     }
// });

// 打开文件框
dialog.showOpenDialog({
    properties:[
        'openFile','openDirectory'
    ]
},(files)=>{
    console.log(files);
})
// 保存文件框
dialog.showSaveDialog({
    title:'保存一些东西',
    filter:[
        {name:'some',extensions:['js']}
    ]
},(filename)=>{
    console.log(filename);
})