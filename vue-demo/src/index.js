import Vue from 'vue';
import app from './app.vue'

// 生成一个vue实例
let vue = new Vue({
    el: '#root',
    render: h=>h(app)
})