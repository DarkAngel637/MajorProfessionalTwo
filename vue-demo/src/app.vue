<template>
    <h2>第一个vue实例，发现了新世界</h2>
</template>

<script>

</script>

<style lang="scss">
@keyframes anim{
    0%{
        color: #000;
        font-size: 22px;
    }
    50%{
        color: #fff;
        font-size: 16px;
    }
    100%{
        color: #000;
        font-size: 22px;
    }
}

h2{
    animation: anim 3s linear infinite;
}
</style>