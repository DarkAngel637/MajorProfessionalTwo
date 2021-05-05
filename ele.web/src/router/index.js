import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入路由组件
import Main from '../views/main.vue';
import Detail from '../views/detail.vue';

import Index from '../views/main/index.vue';
import Discover from '../views/main/discover.vue';
import Order from '../views/main/order.vue';
import Profile from '../views/main/profile.vue';

// 安装插件
Vue.use(VueRouter);

// 生成路由实例
const router = new VueRouter({
  mode: 'history', // 路由模式 hash或者history
  routes: [{
    path: '/main',  // 路由路径
    name: 'Main',  // 路由名字
    component: Main,   // 这个路由要渲染的组件
    children: [{
      path: '/main/index',  // 路由路径
      name: 'Index',  // 路由名字
      component: Index,   // 这个路由要渲染的组件
    },{
      path: 'discover',  // 路由路径
      name: 'Discover',  // 路由名字
      component: Discover,   // 这个路由要渲染的组件
    },{
      path: 'order',  // 路由路径
      name: 'Order',  // 路由名字
      component: Order,   // 这个路由要渲染的组件
    },{
      path: 'profile',  // 路由路径
      name: 'Profile',  // 路由名字
      component: Profile,   // 这个路由要渲染的组件
    }]
  }, {
    path: '/detail',  // 路由路径
    name: 'Detail',  // 路由名字
    component: Detail   // 这个路由要渲染的组件
  },{
    path: '/',
    redirect: '/main/index'
  }]
})

export default router;