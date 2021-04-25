<template>
  <div class="container">
    <div>
      <Left
        :curProvinceId="curProvinceId"
        :provinceList="provinceList"
        :changeProvince="changeProvince"
      />
    </div>
    <div>
      <Right />
    </div>
  </div>
</template>

<script>
import Left from "./components/Left";
import Right from "./components/Right";
// import axios from "axios";

export default {
  data() {
    return {
      provinceList: [],
      cityList: [],
      curProvinceId: 0,
    };
  },
  methods: {
    changeProvince(id) {
      this.curProvinceId = id;
    },
  },
  // 局部注册两个组件
  components: {
    Left,
    Right,
  },
  // async表示异步函数，内部有异步语句
  async created(){
    // await后面跟promise或者其他数据，返回promise resolve时传递到数据，会阻塞代码执行
    let result = await this.axios.get('http://baojia.chelun.com/v1-city-alllist.html');
    if (result.data.code === 1){
      this.provinceList = result.data.data.map(item=>{return {...item, CityName: item.CityName.replace(/特别行政区/, '')}});
      this.curProvinceId = this.provinceList[0].CityID;
    }
  }
  // created() {
  //   axios.get("http://baojia.chelun.com/v1-city-alllist.html").then((res) => {
  //     if (result.data.code === 1) {
  //       this.provinceList = result.data.data.map((item) => {
  //         return { ...item, CityName: item.CityName.replace(/特别行政区/, "") };
  //       });
  //       this.curProvinceId = this.provinceList[0].CityID;
  //     }
  //   });
  // },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-image: linear-gradient(180deg, #232e42, #647e9c);
  // background-image: linear-gradient(90deg, red , yellow);
  div {
    height: 100%;
    overflow-y: scroll;
  }
  & > div:first-child {
    width: 30%;
  }
  & > div:last-child {
    flex: 1;
  }
}
</style>