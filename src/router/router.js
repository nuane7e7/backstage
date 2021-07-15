import Layout from "../views/Layout";
import Login from '../views/Login'

export const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isLogin:false,
      keepAlive: false,
      name: "登录"
    },
  },
  {
    path: "/",
    name: "Layout",
    meta: {
      isLogin:true,
      keepAlive: true,
    },
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          keepAlive: true,
          isLogin:true,
          name: "首页"
        },
        component: () => import("../views/Home.vue")
      },
      {
        path: "/totaltable",
        name: "totaltable",
        meta: {
          keepAlive: true,
          isLogin:true,
          name: "功能1"
        },
        component: () => import("../views/totalTable")
      },
      {
        path: "/fun1",
        name: "fun1",
        meta: {
          keepAlive: true,
          isLogin:true,
          name: "功能2"
        },
        component: () => import("../views/fun1")
      },
      {
        path: "/fun2",
        name: "fun2",
        meta: {
          keepAlive: true,
          isLogin:true,
          name: "功能3"
        },
        component: () => import("../views/fun2")
      },
    ]
  }
];