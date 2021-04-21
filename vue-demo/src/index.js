import Vue from 'vue';
import app from './app.vue'

// 生成一个vue实例
new Vue({
    el: '#root',
    render: h=>h(app)
})