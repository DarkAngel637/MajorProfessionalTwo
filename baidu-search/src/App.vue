<template>
  <div id="app">
    <Header @getSearchResult="getSearchResult"></Header>
    <List :searchResult="searchResult.slice(0, count)"></List>
    <label>结果显示条数：</label>
    <input type="number" v-model.number="count">
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
export default {
  name: 'App',
  data(){
    return {
      searchResult: [],
      count: 10
    }
  },
  watch:{
    count(){
    }
  },
  components: {
    Header,
    List
  },
  methods: {
    getSearchResult(result){
      this.searchResult = result;
    }
  }
}
</script>
