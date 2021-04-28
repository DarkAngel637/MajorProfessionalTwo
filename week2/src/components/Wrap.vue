<template>
    <div>
        <Left v-if="type==='left'" :content="content"/>
        <Right v-else :content="content" :deleteContent="deleteContent"/>
    </div>
</template>

<script>
export default {
    props: ['type', 'content', 'deleteContent']
}
</script>