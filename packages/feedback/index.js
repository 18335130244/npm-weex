import feedback from "./src/feedback.vue"

feedback.install = (Vue) => {
    Vue.components(feedback.name,feedback)
}

// 组件提供自动安装到 浏览器命令
if (typeof window !== 'undefined' && window.Vue) {
    feedback.install(window.Vue,{})
}

export default feedback;
