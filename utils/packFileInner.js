function setVueTemplateInner(dirName){
return `<template>
    <div class="${dirName}">
        {{hello}}
    </div>
</template>
<script >
      export default {
          name:"${dirName}",
          /**
          * 组件初始化变量
          * */
          data(){
              return {
                  hello:"hello ${dirName}"
              }
          },
          methods:{
              init(){
                  console.log('hello ${dirName}')
              },
          },
          /**
          * 组件被创建的生命周期
          * */
          created(){
              this.init()
          },
          /**
          * 组件加载完毕生命周期
          * */
          mounted(){
              
          },
          /**
          * 组件再次被激活生命周期
          * */
          activated() {
              this.init()
          }
      }      
</script>
<style scoped>
    .${dirName}{
        width: 100%;
        text-align: center;
    }        
</style>`
}

function setExportsTemplateInner(dirName){
return `import ${dirName} from "./src/${dirName}.vue"

${dirName}.install = (Vue) => {
    Vue.components(${dirName}.name,${dirName})
}

// 组件提供自动安装到 浏览器命令
if (typeof window !== 'undefined' && window.Vue) {
    ${dirName}.install(window.Vue,{})
}

export default ${dirName};
`;
}

function setAllExportsTemplateInner(packages){
    let importPackages = '';
    let components = '';
    let aloneExportComponents = '';
    packages.forEach(item => {
        importPackages += `import ${item} from './${item}';\n`;
        components += `\n    ${item},`;
        aloneExportComponents += `export const A${item} = ${item};\n`;
    })
return `/** 导入自建库内容 */
${importPackages}

/** 引入的组件模块 */
const components = {${components}
};

/** 提供所有组件支持对浏览器接入 */
function install(Vue,options){
    console.log(options)
    if (install.installed) return;
    // 当前组件是否已经被安装
    install.installed = true
    for (const key in components) {
        const component = components[key];
        Vue.component(component.name, component)
    }
}

/** 由浏览器直接导入 */
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue,{})
}

/** 单独组件导出 */
${aloneExportComponents}

/** 提供对 vue 的单组件及 install 安装方法 */
export default {${components}
    install,
}

`
}


module.exports = {
    setVueTemplateInner,
    setExportsTemplateInner,
    setAllExportsTemplateInner
}
