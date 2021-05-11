import axios from 'axios';

 // 模块内部状态
const state = {
    goodsList: [],
    goodsDetail: {}
}   

// 派生数据
const getters = {
    totalNum: state=>{
        return state.goodsList.filter(item=>item.checked).reduce((total, item) => {
            return (total += item.num);
          }, 0);
    },
    totalPrice: state=>{
        return state.goodsList.filter(item=>item.checked).reduce((total, item) => {
            return (total += item.num*item.price);
          }, 0).toFixed(2);
    }
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
    },
    changeCheck(state, payload){
        let index = state.goodsList.findIndex(item=>item.id === payload.id);
        state.goodsList[index].checked = !state.goodsList[index].checked;
    },
    changeAll(state, payload){
        let carts = state.goodsList.filter(item=>item.num);
        carts.forEach(item=>{
            item.checked = payload;
        })
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
    }, 
    async getGoodsDetail({commit}, payload){
        let result = await axios.get('/goods/detail?id='+payload);
        commit('updateState', {
            key: 'goodsDetail',  
            value: result.data
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