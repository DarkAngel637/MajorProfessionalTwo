import Vue from 'vue'
import App from './App.vue'
// 引入路由配置
import router from './router'
// 引入导航守卫
import './router/permission'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
