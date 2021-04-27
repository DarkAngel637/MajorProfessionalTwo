<template>
    <ul>
        <li v-for="(item, index) in categories" :key="index" @click="$emit('changeCategories', index)">{{item}}</li>
    </ul>
</template>

<script>
export default {
    props: ['categories']
}
</script>