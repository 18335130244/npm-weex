import feedback1 from "./src/feedback1.vue"

feedback1.install = (Vue) => {
    Vue.components(feedback1.name,feedback1)
}

// 组件提供自动安装到 浏览器命令
if (typeof window !== 'undefined' && window.Vue) {
    feedback1.install(window.Vue,{})
}

export default feedback1;
