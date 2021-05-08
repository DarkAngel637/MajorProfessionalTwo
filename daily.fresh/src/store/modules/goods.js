import axios from 'axios';

 // 模块内部状态
const state = {
    goodsList: []
}   

// 突变，同步改变state的方法，唯一修改state的方法
const mutations = {
    updateState(state, payload){
        state[payload.key] = payload.value;
    },
    // payload = {id, type}
    changeNum(state, payload){
        let index = state.goodsList.findIndex(item=>item.id === payload.id);
        if (payload.type === '+'){
            state.goodsList[index].num++;
        }else{
            if (state.goodsList[index].num > 0){
                state.goodsList[index].num--;
            }
        }
    }   
}    

// 异步改变state的方法，异步操作完成后提交mutations
const actions = {
    // 第一个参数是当前context，可以结构出commit
    // 第二个参数是负载数据，触发当前action的数据
    async getGoodsList({commit}, payload){
        let result = await axios.get('/goods/list');
        // debugger
        commit('updateState', {
            key: 'goodsList',  
            value: result.data.list
        });
    }
}     



export default {
    namespaced: true,   // 启用命名空间
    state, 
    mutations,
    actions
}