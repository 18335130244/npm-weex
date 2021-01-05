import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/** 导入本地调试模块 */
import packages from "../packages/index"
Vue.use(packages)

new Vue({
  render: h => h(App),
}).$mount('#app')
