<template>
  <div>
    <!-- <h2>第一个vue实例，发现了新世界</h2> -->
    <ul>
        <span
            :class="active%10===item?'active':''" 
            v-for="(item, index) in list"
            :key="index"
            v-on:click="click(item)"
        >{{item}}</span>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ],
        active: 0
    }
  },
  methods: {
      click(item){
          this.active = item;
      }
  },
  // 组件挂载完成
  mounted() {
    // console.log("app...", this);
    // setInterval(()=>{
    //     this.active++;
    // }, 1000);
  },
};
</script>

<style lang="scss">
@keyframes anim {
  0% {
    color: #000;
    font-size: 22px;
  }
  50% {
    color: #fff;
    font-size: 16px;
  }
  100% {
    color: #000;
    font-size: 22px;
  }
}

h2 {
  animation: anim 3s linear infinite;
}
*{
    padding: 0;
    margin: 0;
}
ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
span{
    border: 1px solid #ccc;
    flex: 1;
    padding: 10px 0;
    text-align: center;
}
span.active{
    background: chocolate;
}
</style>