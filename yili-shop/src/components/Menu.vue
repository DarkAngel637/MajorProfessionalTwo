<template>
    <ul>
        <li v-for="item in categories" :key="item.CategoryId" @click="$emit('changeCategories', item.CategoryUid)">{{item.DisplayName}}</li>
    </ul>
</template>

<script>
export default {
    props: ['categories']
}
</script>