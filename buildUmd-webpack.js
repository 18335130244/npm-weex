const { exec , execSync } = require("child_process");
// vue-cli-service build --target lib --name HelloWorld --dest lib/hellow-world packages/HelloWorld/index.js
const fs = require("fs");
let directoryName = fs.readdirSync('./packages');
console.log(directoryName);
// 本机存在 可以执行 命令的目录
let cmdF = 'D:\\users\\jinfeng.yan\\AppData\\Roaming\\npm\\node_modules\\@vue\\cli-service-global\\node_modules\\.bin\\vue-cli-service build --target lib ';
// 包名字
let packName = 'umd';
let projectName = 'model'
directoryName.forEach(item => {
    if(item.indexOf('.js') > -1){
        // 打包全部组件
        let cmdN = cmdF + `--name ${projectName} --dest ${packName} packages/index.js`;
        Cmd(cmdN)
    }else{
        // 打单一组件
        let cmdN = cmdF + `--name ${item} --dest ${packName}/${item} packages/${item}/index.js`
        Cmd(cmdN)
    }
})
function Cmd (cmdCur){
    console.log(cmdCur);
    exec(cmdCur,function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log(stdout);
        }
    });
}
