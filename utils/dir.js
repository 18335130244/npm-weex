/**
 * try reading dir
 * */
const fs = require('fs')
const path = require('path')
const {CmdSync,Cmd} = require("./cmd")

async function copyAndMoveDir(f, t) {
    let _f = path.resolve(process.cwd(), f)
    let _t = path.join(process.cwd(), t)

    _copyDir(_f, _t);
}

function _copyDir(f, t) {
    try {
        fs.accessSync(t);
    } catch (e) {
        fs.mkdirSync(t);
    }
    try {
        fs.readdirSync(f).forEach(function (p) {
            let _f = f + '/' + p;
            let _t = t + '/' + p;
            try {
                let stat = fs.statSync(_f)
                if (stat.isFile()) {
                    fs.writeFileSync(_t, fs.readFileSync(_f));
                } else if (stat.isDirectory()) {
                    copyAndMoveDir(_f, _t)
                }
            } catch (e) {
                console.log(e)
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function createdDir(path){
    if(!fs.existsSync(path)){
        console.warn(`文件夹 ${path} 正在创建`)
        try {
            fs.mkdirSync(path, {recursive: true});
            console.info(`写入 ${path} 文件夹成功`)
            return true
        } catch (e) {
            console.error(`写入文件夹 ${path} 失败`)
            console.error(`${path} 异常原因` , e)
            return false
        }
    }else{
        console.error(`文件夹 ${path} 存在无法写入 ，请手动删除`)
    }
}

function writeFile(path , buffer ){
    if(!fs.existsSync(path)) {
        console.warn(`文件 ${path} 正在创建`)
        try {
            fs.writeFileSync(path, buffer || '无实体文件写入')
            CmdSync(`git add ${path}`,()=>{
                console.warn(`文件 ${path} 加入版本控制成功`)
            })
            console.info(`写入 ${path} 文件成功`)
            return true
        } catch (e) {
            console.error(`写入 ${path} 文件异常`)
            console.error(`${path} 异常原因`,e)
            return false
        }
    }else{
        console.error(`文件 ${path} 存在无法写入 ，请手动删除`)
    }
}

function hardWriteFile(path , buffer ){
    try {
        fs.writeFileSync(path, buffer || '无实体文件写入')
        CmdSync(`git add ${path}`,()=>{
            console.warn(`文件 ${path} 加入版本控制成功`)
        })
        console.info(`写入 ${path} 文件成功`)
        // 加入版本控制
        return true
    } catch (e) {
        console.error(`写入 ${path} 文件异常`)
        console.error(`${path} 异常原因`,e)
        return false
    }
}

function exists(path){
    try {
        return fs.existsSync(path)
    }catch (e){
        console.error(`校验 ${path} 失败不允许,执行下一步`);
        return true
    }

}

module.exports = {
    copyAndMoveDir,
    exists,
    writeFile,
    createdDir,
    hardWriteFile,
}
