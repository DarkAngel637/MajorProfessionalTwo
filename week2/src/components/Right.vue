<template>
  <div>
    <header>
      <li
        :class="active === index ? 'active' : ''"
        v-for="(item, index) in content"
        :key="index"
        @click="click(index)"
      >
        {{ item.name }}
      </li>
    </header>
    <section v-if="contentList">
      <li v-for="(item, index) in contentList" :key="index">
        <img :src="item.img" alt="" />
        <div>
          <div>
            <p>{{ item.title }}</p>
            <p>
              <span>{{ item.account }}</span>
              <span @click="changeFocus(item.account)">{{
                focus.includes(item.account) ? "已关注" : "关注"
              }}</span>
              <span @click="deleteContent(active, index)">删除</span>
            </p>
          </div>
        </div>
      </li>
    </section>
  </div>
</template>

<script>
export default {
  props: ["content", "deleteContent"],
  data() {
    return {
      active: 0,
      contentList: null,
      focus: [],
    };
  },
  watch: {
    active() {
      this.contentList = this.content[this.active].content;
    },
  },
  methods: {
    click(index) {
      this.active = index;
    },
    changeFocus(name) {
      let index = this.focus.findIndex((item) => item === name);
      if (index === -1) {
        this.focus.push(name);
      } else {
        this.focus.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: lightseagreen;
}
</style>