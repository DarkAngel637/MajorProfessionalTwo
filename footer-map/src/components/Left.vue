<template>
    <div>
        <p 
            :class="curProvinceId===item.CityID?'active':''"
            v-for="(item) in provinceList" 
            :key="item.CityID" 
            @click="changeProvince(item.CityID)"
        >{{item.CityName}}
        <span v-if="item.select.length">{{item.select.length}}</span>
        </p>
    </div>
</template>

<script>
export default {
    // 声明要接收到props
    props: ['provinceList', 'changeProvince', 'curProvinceId']
}
</script>

<style lang="scss" scoped>
p{
    display: inline-block;
    width: 76%;
    margin: 10px 15% 0 12%;
    height: 1.5rem;
    border-radius: 5px;
    background: #fff;
    text-align: center;
    padding: 5px 0;
}
p.active{
    background: orange;
}
</style>