<template>
  <footer>
    <router-link tag="li" to="/main/index">
      <span>首页</span>
    </router-link>
    <router-link tag="li" to="/main/types">
      <span>分类</span>
    </router-link>
    <router-link tag="li" to="/main/cart" class="cart">
      <span>购物车</span>
      <span v-if="totalNum" class="num">{{ totalNum }}</span>
      <span v-if="totalNum" class="price">¥{{ totalPrice }}</span>
    </router-link>
    <router-link tag="li" to="/main/profile">
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // 对象里边的key是当前组件想要使用属性的名字，值是vuex中属性的路径
    ...mapState({
      goodsList: (state) => state.goods.goodsList,
    }),
    ...mapGetters({
      totalNum: 'goods/totalNum',
      totalPrice: 'goods/totalPrice'
    })
  },
};
</script>


<style scoped lang="scss">
footer {
  position: fixed;
  bottom: -2px;
  width: 100%;
  height: 50px;
  border-top: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
  }
}
.cart {
  position: relative;
  .num {
    position: absolute;
    top: -2px;
    left: 10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border-radius: 50%;
    background: red;
    color: white;
    font-size: 12px;
  }
  .price {
    position: absolute;
    top: -12px;
    right: 10px;
    display: inline-block;
    padding: 1px 2px;
    // width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border-radius: 5px;
    background: red;
    color: white;
    font-size: 12px;
  }
}
</style>