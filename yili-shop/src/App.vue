<template>
  <div>
    <div>
      <Menu :categories="categories" @changeCategories="changeCategories"></Menu>
      <List :list="list" @changeNum="changeNum"></List>
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
      result: [],
      categories: [],
      uid: 0
    }
  },
  components: {
    Menu,
    List,
    Bill
  },
  computed: {
    list(){
      let list = Object.values(this.result[this.uid])[0]; 
      debugger
      return list;
    }
  },
  methods: {
    changeCategories(uid){
      this.uid = uid;
    },
    changeNum(name, type){
      let key = Object.keys(this.result[this.uid])[0];
      let items = this.result[this.uid][key];
      let index = items.findIndex(value=>value.name === name);
      if (type === "+"){
        items[index].num++;
      }else if(type === '-'){
        if (items[index].num > 0){
          items[index].num--;
        }
      }
    }
  },
  async created(){
    let result = await this.axios('/list');
    this.result = result.data;
    this.categories = result.data.map(item=>Object.keys(item)[0]);
  }
}
</script>