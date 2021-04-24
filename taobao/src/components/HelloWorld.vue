<template>
  <div class="hello">
    <!-- <img :src="imgs[active]" alt=""> -->
    <img v-if="active===index" v-for="(item, index) in imgs" :src="item" :key="index">
    <span v-if="day===7">不上课</span>
    <span v-else-if="day===6">上半天课</span>
    <span v-else>上半天课</span>

    <div v-show="showSaturday" >周六上半天课</div>

    <p v-text="'周六开关1'" @click="changeSaturday"></p>
    <p v-text="'周六开关2'" @click="changeSaturday()"></p>
    <p v-text="'周六开关3'" @click="showSaturday = !showSaturday"></p>
    <p v-text="'周六开关4'" @click="e=>changeSaturday(e, '123')"></p>


  </div>
</template>

<script>
export default {
  data(){
    return {
      imgs: [
        'https://img.alicdn.com/imgextra/i1/3/O1CN01g0KcJY1BtPrYYRIFA_!!3-0-luban.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
        'https://img.alicdn.com/imgextra/i1/2206686532409/O1CN019xOIUj1TfMnOSwkX7_!!2206686532409-0-lubanimage.jpg'
      ],
      active: 0,
      day: 0,
      showSaturday: true
    }
  }, 
  methods: {
    changeSaturday(){
      console.log('arguments...', arguments);
      this.showSaturday = !this.showSaturday;
      this.log(`周六开关状态：${this.showSaturday}` )
    },
    log(str){
      console.log('str..', str)
    }
  },
  created(){
    setInterval(()=>{
      this.active = (this.active+1)%this.imgs.length
    }, 3000);
    this.day = (new Date).getDay()
  }
}
</script>

<style lang="scss">
img{
  width: 100%;
}
</style>
