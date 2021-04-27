<template>
    <footer>
        <span>总数：{{totalNum}}</span>
        <span>总价：{{totalPrice}}</span>
        <button>提交</button>
    </footer>
</template>

<script>
export default {
    props: ['result'],
    computed: {
        totalNum(){
            return this.result.reduce((total, item)=>{
                let temp = 0;
                Object.values(item)[0].forEach(value=>{{
                    temp += value.num;
                }})
                return total += temp;
            }, 0)
        },
        totalPrice(){
            return this.result.reduce((total, item)=>{
                let temp = 0;
                Object.values(item)[0].forEach(value=>{{
                    temp += value.num*value.Price;
                }})
                return total += temp;
            }, 0)
        }
    }
}
</script>