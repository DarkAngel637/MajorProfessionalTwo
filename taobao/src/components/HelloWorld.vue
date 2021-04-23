<template>
  <div class="hello">
    <img :src="imgs[active]" alt="">
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
      active: 0
    }
  }, 
  created(){
    setInterval(()=>{
      this.active = (this.active+1)%this.imgs.length
    }, 3000);
  }
}
</script>

<style lang="scss">
img{
  width: 100%;
}
</style>
