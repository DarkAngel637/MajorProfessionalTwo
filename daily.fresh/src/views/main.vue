<template>
    <div>
        <div class="container">
            <router-view></router-view>
        </div>
        <my-footer></my-footer>
        <!-- <MyFooter></MyFooter> -->
    </div>
</template>

<script>
import MyFooter from '@/components/footer'
export default {
    components: {
        MyFooter
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin-bottom: 60px;
}
</style>