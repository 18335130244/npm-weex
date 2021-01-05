const {CmdSync,Cmd} = require("./utils/cmd")
// 导入移动 文件包
const copyAndMoveDir = require("./utils/dir")
const fs = require("fs");
/** 扫描 packages 下的文件目录内容 */
let directoryName = fs.readdirSync('./packages');
// 本机存在 可以执行 命令的目录
let cmdF = 'vue build --target lib ';
// 包名字
let packName = 'tmp';
// 落地包的文件夹名字
let loftPackName = 'umd'
// 整体模块名字
let projectName = 'model'
directoryName.forEach(item => {
    if(item.indexOf('.js') > -1){
        // 打包全部组件
        let cmdN = cmdF + `--name ${projectName} --dest ${packName} packages/index.js`;
        CmdSync(cmdN,()=>{
            console.warn(`拷贝 ${packName} 到 ${loftPackName}`)
            copyAndMoveDir(packName,loftPackName);
        })
    }else{
        let dirName = `${packName}/${item}`;
        // 打单一组件
        let cmdN = cmdF + `--name ${item} --dest ${dirName} packages/${item}/index.js`
        CmdSync(cmdN,cb=>{
            console.warn(`拷贝 ${dirName} 到 ${loftPackName}`)
            copyAndMoveDir(dirName,loftPackName);
        })
    }
})
