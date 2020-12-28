import HelloWorld from './HelloWorld';

// 将引入的组件模块存储，方便循环注册所有组件
const components = {
    HelloWorld ,
};

const install = (Vue,options)=>{
    if (install.installed) return;
    install.installed = true
    console.log(options)
    for (const key in components) {
        console.log(components[key]);
        const component = components[key];
        Vue.component(component.name, component)
    }
}

// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue,{})
}

// 每个组件单独导出时使用
for(let key in components){
    components[key].install = (Vue,options)=>{
        console.log(options)
        const component = components[key];
        Vue.component(component.name, component)
    }
}

export var AHelloWorld = HelloWorld

export default {
    // 同时导出组件列表
    ...components,
    // 使用Vue.use必须具有install方法
    // https://cn.vuejs.org/v2/api/#Vue-use
    install,
}
