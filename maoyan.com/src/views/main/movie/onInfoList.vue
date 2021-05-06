<template>
    <ul>
        <img class="loading" v-if="!movieList.length" src="http://h5.chelun.com/2017/official/img/loading.gif" alt="">
        <router-link tag="li" :to="`/detail/${item.id}`" v-for="item in movieList" :key="item.id">
            <img :src="item.img.replace('w.h', '')+'@1l_1e_1c_128w_180h'">
            <div>
                <p>
                    <span>{{item.nm}}</span>
                    <span v-if="item.version" :class="`version ${item.version}`"></span>
                </p>
                <p>观众评 
                    <span>{{item.sc}}</span>
                </p>
                <p>主演：{{item.star}}</p>
                <p>{{item.showInfo}}</p>
            </div>
            <button>购票</button>
        </router-link>
    </ul>
</template>

<script>
// globalReleased: true
// haspromotionTag: false
// id: 1298311
// img: "http://p0.meituan.net/w.h/movie/67a1fe8a23b913b305a37fed1c54b7a35019988.jpg"
// nm: "追虎擒龙"
// preShow: false
// rt: "2021-05-01"
// sc: 8.8
// showInfo: "今天209家影院放映745场"
// showst: 3
// star: "古天乐,梁家辉,吴镇宇"
// version: ""
// wish: 146662
// wishst: 0
export default {
    data(){
        return {
            movieList: []
        }
    },
    async created(){
        let result = await fetch('/api/ajax/movieOnInfoList').then(res=>res.json());
        if (result.movieList){
            this.movieList = result.movieList
        }
        // debugger;
    }
}
</script>