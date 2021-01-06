# packages.json 配置文件
- ### 项目更新日志
    - 增加自动新增包文件
    - 自动运行 dev 环境调试(windows 稳定 | mac 暂未测试)
- ### 结构解释
````
{
    "包名字":{
        modelName:"包中文名字",
        version:"包版本",
        install:"包是否支持单独导出"
    }
}
````
- ### buildUmd-webpack.js 命令讲解
    - 第一步 安装全局 cli 命令 vue-cli-service
    ```
        npm install -g @vue/cli 
        # OR
        yarn global add @vue/cli
    ```
    - 第二步 安装包文件
    ```
        npm install 
        # OR
        yarn install
    ```
    - 第三步 运行基础基座
    ```text
       npm run serve
    ```
    - 第四步 准备打包发布至 git
    ```text
       npm run buildUmd
    ```
- ### 启动项目
    ```
        npm run dev
    ```
