import axios from 'axios';

 // 模块内部状态
const state = {
    types: [],
    active: 0,  // 当前选中的分类下标
    curGoodsList: []
}   

// 派生数据
const getters = {}

// 突变，同步改变state的方法，唯一修改state的方法
const mutations = {
    updateState(state, payload){
        state[payload.key] = payload.value;
    }
}    

// 异步改变state的方法，异步操作完成后提交mutations
const actions = {
    // 第一个参数是当前context，可以结构出commit
    // 第二个参数是负载数据，触发当前action的数据
    async getTypesList({commit}, payload){
        let result = await axios.get('/goods/types');
        // debugger
        commit('updateState', {
            key: 'types',  
            value: result.data
        });
    },
    async getCurGoodsList({state, commit}){
        let type = state.types[state.active];
        let result = await axios.get('/goods/list?type='+type);
        commit('updateState', {
            key: 'curGoodsList',  
            value: result.data.list
        });
    }
}     



export default {
    namespaced: true,   // 启用命名空间
    state, 
    getters,
    mutations,
    actions
}