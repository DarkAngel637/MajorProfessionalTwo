<template>
    <div>
        <input type="text" v-model="keyword">
        <ul>
            <router-link :to="`/detail/${item.id}`" tag="li" v-for="item in searchResult" :key="item.id">{{item.title}}</router-link>
        </ul>
    </div>
</template>

<script>
import { mapState} from 'vuex'

export default {
    data(){
        return {
            keyword: '',
            searchResult: []
        }
    },
    computed: {
        ...mapState({
            goodsList: state=>state.goods.goodsList
        })
    },
    watch: {
        keyword(val){
            this.searchResult = this.goodsList.filter(item=>{
                return item.title.includes(val)
            })
        }
    }
}
</script>