<template>
  <div>
    <MySwiper />
    <my-swiper />
    <Header title="TodoList" @submit="addItem"/>
    <Body :list="list" :changeStatus="changeStatus"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      list: [],
      id: 1
    }
  }, 
  methods: {
    addItem(content){
      this.list.push({
        id: this.id++,
        content,
        finish: false
      })
    },
    changeStatus(id){
      let index = this.list.findIndex(item=>item.id===id)
      this.list[index].finish = !this.list[index].finish
    }
  }
}
</script>