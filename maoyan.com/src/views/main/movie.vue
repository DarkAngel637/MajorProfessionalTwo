<template>
    <div>
        <header>
            <router-link to="/main/movie/onInfoList">热映</router-link> ｜ 
            <router-link to="/main/movie/comingList">待映</router-link> 
        </header>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
header {
    text-align: center;
}
a.router-link-active{
    color: #f03d37;
}
.loading{
    width:50px;
}
</style>