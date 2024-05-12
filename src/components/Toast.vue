<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  props: ["message"]
};
//将setup里的方法拆分出来，写成函数引入进去
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ""
  });
  //方法
  const showToast = message => {
    toastData.show = true;
    toastData.toastMessage = message;
    setTimeout(() => {
      toastData.show = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  const { show, toastMessage } = toRefs(toastData);
  return { show, toastMessage, showToast };
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  padding: 0.1rem;
  border-radius: 0.05rem;
  color: #fff;
}
</style>