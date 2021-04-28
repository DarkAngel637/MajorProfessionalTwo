<template>
  <div>
    <Letter :letters="letters">
      <template v-slot:header>
        <p>字母导航</p>
      </template>

      <!-- <p>#</p> -->
      
      <template v-slot:footer>
        <p>回到顶部</p>
      </template>
    </Letter>
    <Brand :brands="brands"/>
  </div>
</template>

<script>
import Letter from './components/Letter'
import Brand from './components/Brand'

export default {
  name: 'App',
  data(){
    return {
      letters: [],
      brands: []
    }
  },
  components: {
    Letter,
    Brand
  },
  async created(){
    let result = await this.$axios('http://baojia.chelun.com/v2-car-getMasterBrandList.html');
    let letters = [...new Set(result.data.data.map(item=>item.Spelling[0]))]
    let brands = [];
    result.data.data.forEach(item=>{
      let letter = item.Spelling[0];
      let index = brands.findIndex(item=>item.letter===letter);
      if (index === -1){
        brands.push({
          letter,
          list: [item]
        })
      }else{
        brands[index].list.push(item);
      }
    })
    this.letters = letters;
    this.brands = brands;
  }
}
</script>
