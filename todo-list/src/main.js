import Vue from 'vue'
import App from './App.vue'
// 全局注册组件
import Header from './components/Header'
import Body from './components/Body'
import MySwiper from './components/Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/css/swiper.css'
 
Vue.use(VueAwesomeSwiper);


Vue.component('Header', Header);
Vue.component('Body', Body)
Vue.component('MySwiper', MySwiper)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
