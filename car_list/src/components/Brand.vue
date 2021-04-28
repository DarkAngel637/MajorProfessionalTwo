<template>
    <div>
        <div v-for="item in brands" :key="item.letter" :id="item.letter">
            <p>{{item.letter}}</p>
            <ul>
                <li v-for="value in item.list" :key="value.MasterID">
                    <img :src="value.CoverPhoto" alt="">
                    <span>{{value.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['brands'],
    created(){
        this.$bus.$on('letterClick', res=>{
            document.querySelector(`#${res}`).scrollIntoView();
        })
    }
}
</script>