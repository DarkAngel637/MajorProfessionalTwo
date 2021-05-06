<template>
    <div>
        <img v-if="movie.img" :src="movie.img.replace('w.h', '148.208')" alt="">
        <h2>{{movie.nm}}</h2>
        <p>{{movie.dra}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            movie: {}
        }
    },
    async created(){
        console.log('id...', this.$route.params.id);
        let id = this.$route.params.id;
        let result = await fetch(`/api/api/mtrade/mmdb/movie/v5/${id}.json`).then(res=>res.json());
        if (result.data.movie){
            this.movie = result.data.movie;
        }
    }
}
</script>