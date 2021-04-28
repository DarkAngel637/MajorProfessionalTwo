import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 引入bus
import bus from './bus'

Vue.prototype.$bus = bus
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
