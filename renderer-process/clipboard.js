const {clipboard,nativeImage} = require('electron');
// 只能放一个会发现 只能打印出Hello Yugo2
clipboard.writeText('Hello Yugo');
clipboard.writeText('Hello Yugo2');

console.log(clipboard.readText());

let img = nativeImage.createFromPath('main-process/lover.jpg')

clipboard.writeImage(img);

const imgDataURL = clipboard.readImage().toDataURL();

const img3 = new Image();
img3.src = imgDataURL;

document.body.appendChild(img3);