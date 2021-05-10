<template>
    <div>
        <section>
            <li v-for="item in list" :key="item.id">
                <input type="checkbox" :checked="item.checked" @change="changeCheck({id: item.id})">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <span>¥{{item.price}}</span>
                <div>
                    <button @click="changeNum({id: item.id, type: '-'})">-</button>
                    <span>{{item.num}}</span>
                    <button @click="changeNum({id: item.id, type: '+'})">+</button>
                </div>
            </li>
        </section>
        <footer>
            <input :checked="isSelectAll" type="checkbox" name="" id="" @change="e=>changeAll(e.target.checked)">
            <span>全选</span>
            <div>
                <p>总量:{{totalNum}}</p>
                <p>总价:¥{{totalPrice}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapState({
            goodsList: state=>state.goods.goodsList    
        }),
        ...mapGetters({
            totalNum: 'goods/totalNum',
            totalPrice: 'goods/totalPrice'
        }),
        list(){
            return this.goodsList.filter(item=>item.num);
        }, 
        isSelectAll(){
            return this.goodsList.filter(item=>item.num).every(item=>item.checked);
        }
    },
    methods: {
        ...mapMutations({
            changeCheck: 'goods/changeCheck',
            changeNum: 'goods/changeNum',
            changeAll: 'goods/changeAll'
        })
    }
}
</script>