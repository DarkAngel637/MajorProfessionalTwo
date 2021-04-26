<template>
    <input type="text" v-model.lazy.trim="keyword">
</template>

<script>
import Jsonp from 'jsonp';

// jsonp请求url：https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=31254,26350&wd=%E5%85%AB%E7%BB%B412&req=2&bs=%E5%85%AB%E7%BB%B4&csor=4&pwd=%E5%85%AB%E7%BB%B41
const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=31254,26350&req=2&bs=%E5%85%AB%E7%BB%B4&csor=4&pwd=%E5%85%AB%E7%BB%B41`
export default {
    props: ['getSearchResult'],
    data(){
        return {
            keyword: ''
        }
    },
    watch: {
        keyword(val){
            console.log('val...', val);
            Jsonp(url+`&wd=${val}`, (err, res)=>{
                console.log('res...', err, res);
                // this.getSearchResult(res.g);
                this.$emit('getSearchResult', res.g);
            })
        }
    }
}
</script>