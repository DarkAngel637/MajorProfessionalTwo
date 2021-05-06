import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级路由
// import Main from '../views/main.vue'
// import Detail from '../views/detail.vue'

// 路由的按需加载 => 优化首屏加载速度
const Main = ()=>import('../views/main.vue')
const Detail = ()=>import('../views/detail.vue')

// 引入二级路由
import Movie from '../views/main/movie.vue'
import Video from '../views/main/video.vue'
import ShortVideo from '../views/main/shortvideo.vue'
import Qqw from '../views/main/qqw.vue'
import Profile from '../views/main/profile.vue'
// 引入三级路由
import ComingList from '../views/main/movie/comingList.vue'
import OnInfoList from '../views/main/movie/onInfoList.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/main',
    component: Main,
    children: [{
      path: '/main/movie',
      component: Movie,
      children: [{
        path: '/',
        redirect: '/main/movie/onInfoList'
      },{
        path: 'comingList',
        component: ComingList
      }, {
        path: 'onInfoList',
        component: OnInfoList
      }]
    }, {
      path: '/main/video',
      component: Video
    }, {
      path: '/main/shortvideo',
      component: ShortVideo
    }, {
      path: '/main/qqw',
      component: Qqw
    }, {
      path: '/main/profile',
      component: Profile
    }]
  }, {
    path: '/detail/:id?',
    component: Detail
  }, {
    path: '/',
    redirect: '/main/movie/onInfoList'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router