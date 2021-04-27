<template>
    <div>
        <ul>
            <h2>正在进行</h2>
            <li v-for="item in unfinishList" :key="item.id">
                <input type="checkbox"  :checked="item.finish" @change="changeStatus(item.id)">
                <span>{{item.content}}</span>
                <button>删除</button>
            </li>
        </ul>
        <ul>
            <h2>已经完成</h2>
            <li v-for="item in finishList" :key="item.id" :style="{textDecoration: 'line-through'}">
                <input type="checkbox"  :checked="item.finish?'checked':''" @change="changeStatus(item.id)">
                <span>{{item.content}}</span>
                <button>删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            default: ()=>[],
            type: Array
        },
        changeStatus: {
            default: ()=>{},
            type: Function
        }
    },
    computed: {
        finishList(){
            return this.list.filter(item=>item.finish)
        },
        unfinishList(){
            return this.list.filter(item=>!item.finish)
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        text-decoration: line-through;

    }
</style>