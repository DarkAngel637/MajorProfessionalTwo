<template>
    <div>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from '../components/footer'
export default {
    components: {
        MyFooter
    }
}
</script>