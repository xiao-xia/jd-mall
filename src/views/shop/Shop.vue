<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back"></div>
      <div class="search__content">
        <span class="search__content__icon"></span>
        <span class="search__content__input"></span>
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from "../../components/ShopInfo";
export default {
  components: { ShopInfo },
  setup() {
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "VIP尊享满89元减4元运费券",
    };
    return { item };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
.search {
  height: 0.32rem;
  margin: 0.2rem 0 0.16rem 0;
  &__back {
    width: 0.32rem;
    height: 0.3rem;
    background: #000;
  }
  &__content {
    flex: 1;
    line-height: 0.32rem;
    background: #f5f5f5;
    border-radius: 0.16rem;
  }
}
</style>
