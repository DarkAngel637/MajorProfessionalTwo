<template>
    <ul>
        <li v-for="(item, index) in list" :key="index">
            <img :src="item.img" alt="">
            <div>
                <p>{{item.name}}</p>
                <p>价格：¥{{item.Price}}</p>
                <p>
                    <span @click="$emit('changeNum', item.name, '+')">+</span>
                    <span>{{item.num}}</span>
                    <span @click="$emit('changeNum', item.name, '-')">-</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['list']
}
</script>