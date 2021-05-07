import Vue from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
