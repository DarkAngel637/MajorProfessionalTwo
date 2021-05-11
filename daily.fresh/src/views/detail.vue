<template>
  <div>
    <h2>详情页面</h2>
    <p>id: {{ goodsDetail.id }}</p>
    <p>title: {{ goodsDetail.title }}</p>
    <p>desc: {{ goodsDetail.desc }}</p>
    <p>price: {{ goodsDetail.price }}</p>
    <p>num: {{ goodsDetail.num }}</p>
    <p>sales: {{ goodsDetail.sales }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      goodsDetail: state=>state.goods.goodsDetail
    }),
  },
  methods: {
    ...mapActions({
      getGoodsDetail: "goods/getGoodsDetail",
    }),
  },
  created() {
    let id = this.$route.params.id;
    this.getGoodsDetail(id);
  }
};
</script>