import Vue from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
// 引入导航守卫
import './router/permission'
// 引入store
import store from './store'
// 引入vant
import Vant from 'vant';
// 引入vant样式
import 'vant/lib/index.css';
// 注册vant
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
