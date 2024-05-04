<template>
  <div class="docker">
    <div
      v-for="item in dockerList"
      :key="item.icon"
      class="docker_item"
      :class="{'docker_item':true,'docker_item--active':index === 0 }"
    >
      <div
        class="iconfont"
        v-html="item.icon"
      ></div>
      <div class="docker_title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe603", text: "首页" },
      { icon: "&#xe6af", text: "购物车" },
      { icon: "&#xe63e", text: "订单" },
      { icon: "&#xe7d5", text: "我的" }
    ];
    return { dockerList };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  background: red;
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01px solid $content-bgColor;
  color: $content-fontcolor;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
  }
  &_item--active {
    color: #1fa4fc;
  }
  &_title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5); //宽度和高度各自缩小到原来的50%
    transform-origin: center top; //元素在进行缩放时保持顶部和中心对齐
  }
}
</style>