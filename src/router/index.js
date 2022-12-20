import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'Login',
    // 为了在动态生成菜单时隐藏该路由,在这里加入自定义参数
    hidden:true
  },
  {
    path: '/login',
    name: 'Login',
    hidden:true,
    component: () => import('../views/account/Login.vue')
  },
  {
    path:'/home',
    name:'Home',
    meta:{
      title:'控制台'
    },
    component:()=>import('../layout/Index.vue'),
    children: [
      {
        path: "/console",
        name: "Console",
        meta: {
          title: "首页"
        },
        component: () => import("../views/console/Index.vue"),
      }
    ]
  },
  {
    path:'/news',
    name:'News',
    meta:{
      title:'信息管理'
    },
    component:()=>import('../layout/Index.vue'),
  },
  {
    path:'/user',
    name:'User',
    meta:{
      title:'用户管理'
    },
    component:()=>import('../layout/Index.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
