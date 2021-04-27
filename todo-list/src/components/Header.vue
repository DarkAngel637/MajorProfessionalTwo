<template>
    <!-- <h2>Header</h2> -->
    <div>
        <h2>{{title}}</h2>
        <input type="text" @keydown.enter="submit">
    </div>
</template>

<script>
export default {
    // data(){
    //     return {
    //         item: ''
    //     }
    // },
    methods: {
        submit(e){
            this.$emit('submit', e.target.value)
            e.target.value = '';
        }
    },
    props: {
        title: {
            default: '',
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
h2{
    color: goldenrod;
}
</style>