import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import packages from "../packages/index"
Vue.use(packages)

new Vue({
  render: h => h(App),
}).$mount('#app')
