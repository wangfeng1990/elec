const {shell} = require('electron')

const links = document.querySelectorAll('a[href]');

Array.from(links).forEach((link)=>{
    const url = link.getAttribute('href');
    if(url.indexOf('http') == 0){
        link.onclick = (e) =>{
            // 阻止原生的方法（原生a链接有问题，这里阻止原生方法）
            e.preventDefault();
            shell.openExternal(url);
        }
    }
})
// shell.openExternal('http://www.baidu.com');