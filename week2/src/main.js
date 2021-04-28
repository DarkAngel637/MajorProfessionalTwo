import Vue from 'vue'
import App from './App.vue'
// 全局注册下组件
import Wrap from './components/Wrap.vue'
import Left from './components/Left.vue'
import Right from './components/Right.vue'

Vue.component('Wrap', Wrap);
Vue.component('Left', Left);
Vue.component('Right', Right);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
