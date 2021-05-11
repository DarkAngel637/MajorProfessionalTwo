<template>
    <div>
        <ul>
            <li @click="updateState({key: 'active', value: index})" :class="{active: index===active}" v-for="(item, index) in types" :key="item">{{item}}</li>
        </ul>
        <ul>
            <router-link tag="li" v-for="item in curGoodsList" :key="item.id" :to="`/detail/${item.id}`">
                <img :src="item.img" alt="" />
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
                <div>
                    <span>销量：{{ item.sales }}</span>
                    <span>¥{{ item.price }}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapState({
            types: state=>state.types.types,
            active: state=>state.types.active,
            curGoodsList: state=>state.types.curGoodsList
        })
    },
    watch: {
        active: {
            handler(){
                this.getCurGoodsList();
            }
        }
    },
    methods: {
        ...mapActions({
            getTypesList: "types/getTypesList",
            getCurGoodsList: "types/getCurGoodsList"
        }),
        ...mapMutations({
            updateState: "types/updateState"
        })
    },  
    async created(){
        await this.getTypesList();
        this.getCurGoodsList();
    }
}
</script>

<style scoped lang="scss">
li.active{
    background: lightgreen;
    font-weight: 500;
}
</style>