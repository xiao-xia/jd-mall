<template>
  <div>
    <div class="wrapper">
      123
    </div>
    <div class="docker">
      <div class="docker_item docker_item--active">
        <div class="iconfont">&#xe603;</div>
        <div class="docker_title">首页</div>
      </div>
      <div class="docker_item">
        <div class="iconfont">&#xe6af;</div>
        <div class="docker_title">购物车</div>
      </div>
      <div class="docker_item">
        <div class="iconfont">&#xe63e;</div>
        <div class="docker_title">订单</div>
      </div>
      <div class="docker_item">
        <div class="iconfont">&#xe7d5;</div>
        <div class="docker_title">我的</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: blue;
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
  border-top: 0.01px solid #f1f1f1;
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
