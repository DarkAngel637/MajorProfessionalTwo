import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入一级路由
import Detail from '@/views/detail.vue'
import Main from '@/views/main.vue'
import Login from '@/views/login.vue'
import Search from '@/views/search.vue'

// 引入二级路由
import Index from '@/views/main/index.vue'
import Types from '@/views/main/types'
import Profile from '@/views/main/profile.vue'
import Cart from '@/views/main/cart.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/detail/:id',
  component: Detail
}, {
  path: '/main',
  component: Main,
  children: [{
    path: 'index',
    component: Index
  }, {
    path: 'types',
    component: Types
  }, {
    path: 'cart',
    component: Cart
  }, {
    path: 'profile',
    component: Profile
  }]
}, {
  path: '/login',
  component: Login
}, {
  path: '/search',
  component: Search
}, {
  path: '/',
  redirect: '/main/index'
  // }, {
  // path: '*',
  // component: 
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router