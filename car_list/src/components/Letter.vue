<template>
  <ul>
      <slot name="header"></slot>
      <slot>默认占位</slot>
      <li v-for="item in letters" :key="item" @click="$bus.$emit('letterClick', item)">{{item}}</li>
      <slot name="footer"></slot>
  </ul>
</template>

<script>
export default {
    props: ['letters']
}
</script>

<style scoped lang="scss">
ul{
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    list-style: none;
    text-align:center;
}
</style>