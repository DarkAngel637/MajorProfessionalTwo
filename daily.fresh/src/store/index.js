import Vue from 'vue'
import Vuex from 'vuex'
// 引入日志插件
import createLogger from 'vuex/dist/logger'
// 引入子模块
import goods from './modules/goods'

// 使用插件
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    goods
  },
  state: {},  // 全局状态
  plugins: [createLogger()] // 使用插件
})

export default store;