<template>
    <div>
        <router-view></router-view>
        <footer>
            <router-link to="/main/index">首页</router-link>
            <router-link replace to="/main/discover">发现</router-link>
            <router-link to="/main/order">订单</router-link>
            <router-link to="/main/profile">我的</router-link>
        </footer>
    </div>
</template>