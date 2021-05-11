<template>
    <div>
        <ul>
            <li :class="{active: index===active}" v-for="(item, index) in types" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

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