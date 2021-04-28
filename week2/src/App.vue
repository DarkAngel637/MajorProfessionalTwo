<template>
  <div>
    <Wrap 
      :content="left" 
      type="left"
    />
    <Wrap 
      :content="right"
      :deleteContent="deleteContent"
      type="right"
    />
  </div>
</template>

<script>
import {left, right} from './data'
export default {
  name: 'App',
  data(){
    return {
      left,
      right
    }
  },
  methods: {
    deleteContent(active, index){
      this.right[active].content.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
