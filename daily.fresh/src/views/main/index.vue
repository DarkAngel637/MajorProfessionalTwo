<template>
    <ul>
        <li v-for="item in goodsList" :key="item.id">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
            <div>
                <span>¥{{item.price}}</span>
                <p class="action">
                    <span @click="changeNum({id: item.id, type: '+'})">+</span>
                    <span v-if="item.num">{{item.num}}</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
    computed: {
        // 对象里边的key是当前组件想要使用属性的名字，值是vuex中属性的路径
        ...mapState({
            goodsList: state=>state.goods.goodsList
        })
    },
    methods: {
        // 对象里边的key是我们当前组件想要使用的方法名字，值是在vuex中存储的路径
        ...mapActions({
            getGoodsList: 'goods/getGoodsList'
        }),
        ...mapMutations({
            changeNum: 'goods/changeNum'
        })
    },
    created(){
        this.getGoodsList();
    }
}
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    height: 100%;
    display: flex; 
    flex-wrap: wrap;
    li{
        margin-left: 5px;
        width: 48%;
        img{
            width: 100%;

        }
    }
}
 .action{
    float: right;
    color: white;
    font-weight: 900;
    font-size: 24px;
    position: relative;
    span:nth-child(1){
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: pink;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
    }
    span:nth-child(2){
        position: absolute;
        top: -2px;
        right: -2px;
        display: inline-block;
        width:15px;
        height:15px;
        line-height:15px;
        text-align: center;
        border-radius: 50%;
        background: red;
        color: white;
        font-size: 12px;
    }
}
</style>