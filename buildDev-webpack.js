/**
 * dev 开发环境调试内容
 * */

const pages = require('./packages.json');
const fs = require('fs');
const path = require('path')
function getDirName (pathDir){
    return path.join(__dirname + pathDir);
}

/**
 * 校验文件是否存在
 * */
function existsDir(name){
    let exists = fs.existsSync(getDirName(name))
}

/**
 * 当前包文件夹是否存在
 * */
for(let i in pages){
    let exists = existsDir(getDirName(`/packages/${i}`))
    console.log(exists);
}

// 监听文件 packages.json 包文件是否有变化 ， 动态添加文件夹 并创建文件 并加入 版本控制
// fs.watch(getDirName(`/packages.json`),(event,filename)=>{
//     console.log(event);
//     console.log(filename);
// })
