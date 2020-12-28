/* 不熟悉配置的可官网查看 https://cli.vuejs.org/zh/config/#pages */

module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack:(config)=>{
        config.module
            .rule('js')
            .include
            .add('/packages/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options=>{
                console.log(options)
                //TODO
                return options
            })
    }
}
