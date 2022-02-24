import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{show:true}
  },
  {
    path: '/jiayao',
    name: 'Jiayao',
    component: () => import( '../views/jiayao.vue'),
    meta:{show:true}
  },
  {
    path: '/shichi',
    name: 'Shichi',
    component: () => import( '../views/shichi.vue'),
    meta:{show:true}
  },
  {
    path: '/youxuan',
    name: 'Youxuan',
    component: () => import( '../views/youxuan.vue'),
    meta:{show:true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{show:true}
  },
  // 分类
  {
    path:'/fruit',
    name:'Fruit',
    component: () => import('../views/fruit.vue'),
    meta:{show:true}
  },
  {//选项
    path:'/options',
    name:'Options',
    component:()=> import('../views/options.vue')
  },
  {//购物车
    path:'/gouwuche',
    name:'Gouwuche',
    component:()=> import('../views/gouwuche.vue'),
    meta:{show:false}
  }
]

const router = new VueRouter({
  linkActiveClass:"linkActive",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
