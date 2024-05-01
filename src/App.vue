<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe619;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position_notice">&#xe7e5;</span>
      </div>
      <div class="search">
        <span class="iconfont">&#xe6c5;</span>
        <span>山姆会员商店优惠商品</span>
      </div>
      <div class="banner">
        <img
          class="banner__img"
          src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        />
      </div>
      <div class="icons">
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
          />
          <p class="icons__item__desc">菜市场</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/水果店.png"
          />
          <p class="icons__item__desc">水果店</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
          />
          <p class="icons__item__desc">鲜花绿植</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
          />
          <p class="icons__item__desc">医药健康</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/家居.png"
          />
          <p class="icons__item__desc">家具时尚</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
          />
          <p class="icons__item__desc">烘培蛋糕</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/签到.png"
          />
          <p class="icons__item__desc">签到</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
          />
          <p class="icons__item__desc">大牌免运</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/红包.png"
          />
          <p class="icons__item__desc">红包套餐</p>
        </div>
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/near.png"
            class="nearby__item__img"
          />
          <div class="nearby__content">
            <div class="nearby__content__title">沃尔玛</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
              <span class="nearby__content__tag">月售1万+</span>
            </div>
            <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
          </div>
        </div>
      </div>
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
@import "./style/viriables.scss";
@import "./style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;

  .iconfont {
    // position: relative;
    // top: 0.04rem;
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &_text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding: 0.12rem 0;

    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    border-bottom: 3px solid $content-bgColor;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
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
