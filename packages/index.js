/** 导入自建库内容 */
import feedback from './feedback';
import feedback1 from './feedback1';
import HelloWorld from './HelloWorld';


/** 引入的组件模块 */
const components = {
    feedback,
    feedback1,
    HelloWorld,
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
export const Afeedback = feedback;
export const Afeedback1 = feedback1;
export const AHelloWorld = HelloWorld;


/** 提供对 vue 的单组件及 install 安装方法 */
export default {
    feedback,
    feedback1,
    HelloWorld,
    install,
}

