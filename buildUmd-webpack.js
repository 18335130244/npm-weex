const { exec , execSync } = require("child_process");
// vue-cli-service build --target lib --name HelloWorld --dest lib/hellow-world packages/HelloWorld/index.js
const fs = require("fs");
let directoryName = fs.readdirSync('./packages');
console.log(directoryName);
// 本机存在 可以执行 命令的目录
let cmdF = 'vue build --target lib ';
// 包名字
let packName = 'umd1';
// 落地包的文件夹名字
let loftPackName = 'umd'
// 整体模块名字
let projectName = 'model'
// 导入移动 文件包
const copyDir = require('node-copydir')
directoryName.forEach(item => {
    if(item.indexOf('.js') > -1){
        // 打包全部组件
        let cmdN = cmdF + `--name ${projectName} --dest ${packName} packages/index.js`;
        CmdSync(cmdN,()=>{
            console.warn(`拷贝 ${packName} 到 ${loftPackName}`)
            copyDir(packName,loftPackName);
        })
    }else{
        let dirName = `${packName}/${item}`;
        // 打单一组件
        let cmdN = cmdF + `--name ${item} --dest ${dirName} packages/${item}/index.js`
        CmdSync(cmdN,cb=>{
            console.warn(`拷贝 ${dirName} 到 ${loftPackName}`)
            copyDir(dirName,loftPackName);
        })
    }
})
// 同步构建
function CmdSync (cmdCur,cb=()=>{}){
    execSync(cmdCur,function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log(stdout);
            cb()
        }
    });
}
// 异步构建
function Cmd (cmdCur){
    exec(cmdCur,function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log(stdout);
        }
    });
}
