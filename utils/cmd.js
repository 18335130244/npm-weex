// 执行的命令行文件
const { exec , execSync } = require("child_process");
// 同步构建
exports.CmdSync =  (cmdCur,cb=()=>{}) => {
    try {
        execSync(cmdCur, {encoding: 'utf8'});
        cb()
    } catch (e) {
        // 执行失败
        console.error(`执行命令 ${cmdCur} 失败`)
        console.error(`失败原因`,e);
    }
}
// 异步构建
exports.Cmd = (cmdCur,cb = ()=>{})=>{
    exec(cmdCur,function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log(stdout);
            // 异步执行完毕回调
            cb();
        }
    });
}
