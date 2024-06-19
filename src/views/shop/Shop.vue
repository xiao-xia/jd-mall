<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe697;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6c5;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
    <Content />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import ShopInfo from "../../components/ShopInfo";
import axios from "axios";
import Content from "./Content.vue";

//获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  console.log(route.params.id);
  const shopData = reactive({ item: {} });
  const getItemData = async () => {
    // const result = await get("/api/shop/1");
    axios
      .get("/api/shop/shop/id")
      .then((result) => {
        let { data } = result.data;
        if (result.data?.errno === 0 && result.data?.data) {
          shopData.item = data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { item } = toRefs(shopData);
  return { item, getItemData };
};

//点击后退逻辑
const useBackROuterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return handleBackClick;
};

export default {
  components: { ShopInfo, Content },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const handleBackClick = useBackROuterEffect();
    getItemData();
    return { item, handleBackClick };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: $search-fontColor;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
