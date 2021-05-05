import Vue from 'vue'
import App from './App.vue'
// 引入路由实例
import router from './router/index'
// 引入MockJS
import './mock/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
