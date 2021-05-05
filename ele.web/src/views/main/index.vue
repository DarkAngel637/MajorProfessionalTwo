<template>
    <div>
        <h2>首页页面</h2>
            <router-link to="/main/index" active-class="active" />
        <ul>
            <router-link v-for="item in list" :to="{path: '/detail', query: item}" :key="item.id">
            <!-- <router-link v-for="item in list" :to="{name: 'Detail', params: item}" :key="item.id"> -->
                <img :src="item.img" alt="">
                <div>
                    <p>{{item.title}}</p>
                    <p>{{item.description}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            list: []
        }
    },
    async created(){
        let result = await axios.get('/shop/list');
        this.list = result.data;
    }
}
</script>