<template>
  <div>
    <router-link tag="div" class="search" to="/search">输入商品名称...</router-link>
    <header>
      <span
        @click="active = index"
        :class="active === index ? 'active' : ''"
        v-for="(item, index) in banner"
        :key="item"
        >{{ item }}</span
      >
    </header>
    <van-swipe
      class="my-swipe"
      indicator-color="white"
      autoplay="300"
      ref="swipe"
      @change="(index) => (active = index)"
    >
      <van-swipe-item v-for="item in banner" :key="item">
        <p :title="item">{{ item }}</p>
      </van-swipe-item>
    </van-swipe>
    <section class="sort">
      <p :class="sort===0?'active':''" @click="sort=0">
        <span>价格</span>
        <span v-if="sort===0" @click="sortType=1-sortType">{{sortType==0?'升序':'降序'}}</span>
      </p>
      <p :class="sort===1?'active':''" @click="sort=1">
        <span>销量 </span>
        <span v-if="sort===1" @click="sortType=1-sortType">{{sortType==0?'升序':'降序'}}</span>
      </p>
    </section>
    <ul>
      <router-link tag="li" v-for="item in list" :key="item.id" :to="`/detail/${item.id}`">
        <img :src="item.img" alt="" />
        <p>{{ item.title }}</p>
        <p>{{ item.desc }}</p>
        <div>
          <span>销量：{{ item.sales }}</span>
          <span>¥{{ item.price }}</span>
          <p class="action">
            <span @click.stop="changeNum({ id: item.id, type: '+' })">+</span>
            <span v-if="item.num">{{ item.num }}</span>
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      active: 0,
      sort: -1, //0 表示价格，1表示销量
      sortType: 0, //0 表示升序，1表示降序
    };
  },
  watch: {
    active() {
      this.$refs.swipe.swipeTo(this.active);
    }
  },
  computed: {
    // 对象里边的key是当前组件想要使用属性的名字，值是vuex中属性的路径
    ...mapState({
      goodsList: (state) => state.goods.goodsList,
    }),
    list(){
      // 正常情况下
      // return this.goodsList;
      if (this.sort === 0){
        if (this.sortType === 0){
          return [...this.goodsList].sort((a,b)=>a.price-b.price);
        }else{
          return [...this.goodsList].sort((a,b)=>b.price-a.price);
        }
      }else if(this.sort === 1){
        if (this.sortType === 0){
          return [...this.goodsList].sort((a,b)=>a.sales-b.sales);
        }else{
          return [...this.goodsList].sort((a,b)=>b.sales-a.sales);
        }
      }
      return this.goodsList;
    },
    banner() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    },
  },
  methods: {
    // 对象里边的key是我们当前组件想要使用的方法名字，值是在vuex中存储的路径
    ...mapActions({
      getGoodsList: "goods/getGoodsList",
    }),
    ...mapMutations({
      changeNum: "goods/changeNum",
    }),
  },
  created() {
    this.getGoodsList();
  },
};
</script>

<style lang="scss" scoped>
.search{
  height:30px;
  width: 90%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px auto;
  padding: 0 5px;
  line-height: 30px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    flex: 1;
    display: inline-block;
    text-align: center;
    border-left: 1px solid #ccc;
  }
  span.active {
    background: limegreen;
  }
}
.sort{
  .active{
    color:pink;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    margin-left: 5px;
    width: 48%;
    img {
      width: 100%;
    }
  }
}
.action {
  float: right;
  color: white;
  font-weight: 900;
  font-size: 24px;
  position: relative;
  span:nth-child(1) {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: pink;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
  }
  span:nth-child(2) {
    position: absolute;
    top: -2px;
    right: -2px;
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
}
</style>