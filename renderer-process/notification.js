const path = require('path');

const option ={
    title:'body',
    body: 'body',
    icon: path.join('../main-process/lover.jpg')
}

const myNotification = new window.Notification(option.title,option)

myNotification.onclick = ()=>{
    console.log('clicked');
}