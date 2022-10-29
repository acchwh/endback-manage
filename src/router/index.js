import { createRouter, createWebHistory } from "vue-router";
import layout from "@/views/layout/index.vue"

const router = createRouter({
  history: createWebHistory(),
  // 路由配置
  routes: [
    {
      //登录页路由，只有一个界面
      path: "/login",
      component: () => import("@/views/login/index.vue")
    },
    //主页路由，所有后台信息都在此路由和子代路由显示
    {
      // 轮播图列表
      path: "/banner",
      component: layout,
      // 子路由
      children: [
        {
          path: "list",
          component: () => import("@/views/banner/list.vue")
        },
        {
          path: "add",
          component: () => import("@/views/banner/add.vue")
        },
      ],
    },
    // 根路由配置
    {
      path: "/",
      component: layout,
    },
  ],
});

export default router;
