import HelloWorld from "./src/HelloWorld.vue"

HelloWorld.install = (Vue) => {
    Vue.components(HelloWorld.name,HelloWorld)
}

export default HelloWorld;