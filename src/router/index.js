import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home'
// import Shop from '../views/shop/Shop'
// import Register from '../views/register/Register'
// import Login from '../views/Login/Login'

//筛选展示的组件
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue')
  }, {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/Shop.vue')
  }, {
    path: '/Register',
    name: 'Register',
    // component: Register,
    component: () => import(/* webpackChunkName: "Register" */ '../views/register/Register.vue'),
    beforeEnter(to, from, next) {
      //如果已经登录，再访问/login页面，不让你访问了
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/Login',
    name: 'Login',
    // component: Login,
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login/Login.vue'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//每次做路由跳转之前我都会做这个方法
router.beforeEach((to, from, next) => {
  //to 你要跳到哪个页面的信息
  //from 是哪里跳过来的信息
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === 'Login' || name === 'Register');//如果是登录或者注册页面的话，直接展示
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' });//netxt调用我逻辑再回往下执行
})

export default router
