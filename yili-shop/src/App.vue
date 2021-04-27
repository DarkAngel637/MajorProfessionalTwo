<template>
  <div>
    <div>
      <Menu :categories="categories" @changeCategories="changeCategories"></Menu>
      <List></List>
    </div>
    <Bill ></Bill>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import List from '@/components/List'
import Bill from '@/components/Bill'

export default {
  name: 'App',
  data(){
    return {
      categories: []
    }
  },
  components: {
    Menu,
    List,
    Bill
  },
  methods: {
    changeCategories(uid){
      console.log('uid...', uid);
    }
  },
  async created(){
    let result = await this.axios('/list');
    this.categories = result.data.categories
  }
}
</script>