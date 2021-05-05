<template>
    <h2>详情页面</h2>
</template>

<script>
export default {
    created(){
        console.log('路由元信息...', this.$route, this.$route.params.id);
        console.log('全局路由实例...', this.$router);
        /**
         * 路由如何通过API跳转
         * this.$router.push    向历史记录中添加记录，可以返回上一个
         * this.$router.replace 替换历史记录中最后一条，返回不了上一个
         * this.$router.go      去任意一个历史记录，可往前可往后
         * this.$router.back    回退到上一个历史记录
         *  */ 

    }
}
</script>