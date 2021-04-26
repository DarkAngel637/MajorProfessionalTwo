<template>
    <ul>
        <li v-for="(item) in searchResult" :key="item.sa" v-text="item.q"></li>
    </ul>
</template>

<script>
export default {
    props: ['searchResult']
}
</script>