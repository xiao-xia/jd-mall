<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        autocomplete="new-password"
        v-model="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="确认密码"
        type="password"
        v-model="ensurement"
      />
    </div>
    <div
      class="wrapper__register-button"
      @click="handleRehister"
    >注册</div>
    <div
      class="wrapper__register-link"
      @click="hangleLoginCilck"
    >已有注册去登录</div>
    <Toast
      v-if="show"
      :message="toastMessage"
    />
  </div>

</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import Toast, { useToastEffect } from "../../components/Toast";
import axios from "axios";
//处理注册相关逻辑
const useRegisterEffect = showToast => {
  const router = useRouter();
  const data = reactive({ username: "", password: "", ensurement: "" });
  const handleRehister = async () => {
    axios
      .post("/api/login/register")
      .then(res => {
        let { data } = res.data;
        if (data?.errno === 0) {
          localStorage.isLogin = true;
          router.push({ name: "Login" });
        } else {
          showToast("注册失败"); //方法
        }
      })
      .catch(err => {
        showToast("请求失败");
      });
  };
  const { username, password, ensurement } = toRefs(data);
  return { username, password, ensurement, handleRehister };
};

//处理登录跳转
const useLoginEffect = () => {
  const router = useRouter();
  const hangleLoginCilck = () => {
    router.push({ name: "Login" });
  };
  return {
    hangleLoginCilck
  };
};

export default {
  name: "Login",
  component: {
    Toast
  },
  //职责就是告诉你，代码执行的一个流程
  setup() {
    const { show, toastMessage, showToast } = useToastEffect(); //Toast逻辑
    const {
      username,
      password,
      ensurement,
      handleRehister
    } = useRegisterEffect(showToast);
    const { hangleLoginCilck } = useLoginEffect();
    return {
      username,
      password,
      ensurement,
      handleRehister,
      hangleLoginCilck,
      show,
      toastMessage
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>