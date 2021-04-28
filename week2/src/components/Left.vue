<template>
    <div>
        <header>
            <span>{{content.title}}</span>
            <ul>
                <li 
                    :class="active===index?'active':''" 
                    v-for="(item, index) in content.list" 
                    :key="index"
                    @click="click(index)"
                >{{item.name}}</li>
            </ul>
        </header>
        <section v-if="contentList">
            <p>
                <span>{{contentList.account}}</span>
                <span 
                    @click="changeFocus(contentList.account)"
                >{{focus.includes(contentList.account)?'已关注':'关注'}}</span>
            </p>
            <div>
                <img :src="contentList.img" alt="">
                <div>
                    <p>{{contentList.title}}</p>
                    <p>{{contentList.introduce}}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['content'],
    data(){
        return {
            active: 0,
            contentList: null,
            focus: []
        }
    },
    watch: {
        active(){
            let obj = this.content.list[this.active].content;
            if (obj){
                this.contentList = {...obj}
            }else{
                this.contentList = obj;
            }
        }
    },
    methods: {
        click(index){
            this.active = index
        },
        changeFocus(name){
            let index = this.focus.findIndex(item=>item===name);
            if (index === -1){
                this.focus.push(name);
            }else{
                this.focus.splice(index, 1);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.active{
    color: lightseagreen;
}
</style>