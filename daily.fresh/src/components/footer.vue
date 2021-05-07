<template>
  <footer>
    <router-link tag="li" to="/main/index">
      <span>首页</span>
    </router-link>
    <router-link tag="li" to="/main/category">
      <span>分类</span>
    </router-link>
    <router-link tag="li" to="/main/cart">
      <span>购物车</span>
    </router-link>
    <router-link tag="li" to="/main/profile">
      <span>我的</span>
    </router-link>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: fixed;
  bottom:0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  li{
      flex: 1;
      text-align: center;
  }
}
</style>