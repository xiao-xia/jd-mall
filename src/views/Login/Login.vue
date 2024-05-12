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
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div
      class="wrapper__login-button"
      @click="handleLogin"
    >登陆</div>
    <div
      class="wrapper__login-link"
      @click="handleRegisterClick"
    >立即注册</div>
    <Toast
      v-if="show"
      :message="toastMessage"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import axios from "axios";

import Toast, { useToastEffect } from "../../components/Toast";
// axios.defaults.headers.post["Content-Type"] = "application/json";

//处理注册逻辑
const useLoginEffect = showToast => {
  const router = useRouter();
  const data = reactive({ username: "", password: "" });
  /* const handleLogin = async () => {
      try {
        const data = await post("/api/user/login", {
          username: data.username,
          password: data.password,
        });
        if (data?.errno === 0) {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
          alert("登陆失败");
        }
      } catch (e) {
        alert("请求失败");
      }
      // const result = await axios
      //   .post(
      //     "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login",
      //     {
      //       username: data.username,
      //       password: data.password
      //     }
      //   )
    }; */
  const handleLogin = async () => {
    axios
      .get("/api/login")
      .then(res => {
        let { data } = res.data;
        if (data?.errno === 0) {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
          showToast("登录失败"); //方法
        }
      })
      .catch(err => {
        showToast("请求失败");
      });
  };
  const { username, password } = toRefs(data);
  return { username, password, handleLogin };
};

//处理注册的逻辑
const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({ name: "Register" });
  };
  return {
    handleRegisterClick
  };
};

export default {
  name: "Login",
  components: {
    Toast
  },
  //职责就是告诉你，代码执行的一个流程
  setup() {
    const { show, toastMessage, showToast } = useToastEffect(); //Toast逻辑
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { handleRegisterClick } = useRegisterEffect();

    return {
      username,
      password,
      show,
      toastMessage,
      handleLogin,
      handleRegisterClick
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
  &__login-button {
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
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
