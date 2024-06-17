<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopInfo v-for="item in nearbyList" :key="item._id" :item="item" />
  </div>
</template>

<script>
import ShopInfo from "../../components/ShopInfo";
import { ref } from "vue";
import axios from "axios";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    axios
      .get("/api/shop/hot-list")
      .then((result) => {
        let { data } = result.data;
        if (result.data?.errno === 0 && result.data?.data.length) {
          nearbyList.value = data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { nearbyList, getNearbyList };
};

export default {
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return { nearbyList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
}
</style>
