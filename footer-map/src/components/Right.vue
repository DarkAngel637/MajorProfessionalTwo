<template>
    <div class="right">
        <span 
            :class="select.indexOf(item.CityID)!==-1?'city active':'city'" 
            v-for="(item) in cityList" 
            :key="item.CityID"
            @click="changeCity(item.CityID)"
        >{{item.CityName}}</span>
    </div>
</template>

<script>
export default {
    props: {
        cityList: {
            default: ()=>[],
            type: Array
        },
        changeCity: {
            default: ()=>{},
            type: Function
        },
        select: {
            default: ()=>[],
            type: Array
        }
    }
}
</script>

<style lang="scss">
.right{
    height: 100%;
    margin-left: 10px;
    overflow-y: scroll;
}
.city{
    display: inline-block;
    width: 27%;
    margin: 15px 3% 0 0;
    height: 1.3rem;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border: 1px solid #fff;
}
.city.active{
    background:orange;
}
</style>