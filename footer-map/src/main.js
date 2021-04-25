import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// 把axios绑定到Vue的原型链上，所有组件都能访问到
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
