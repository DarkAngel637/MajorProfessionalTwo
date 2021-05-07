<template>
    <ul>
        <li v-for="item in goodsList" :key="item.id">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
            <p>
                <span>¥{{item.price}}</span>
                <p>+
                    <span v-if="item.num">{{item.num}}</span>
                </p>
            </p>
        </li>
    </ul>
</template>

<script>
import {mapState, mapActions} from 'vuex';

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
        })
    },
    created(){
        this.getGoodsList();
    }
}
</script>