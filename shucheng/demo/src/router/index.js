import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{show:true,header2:true,show2:true,scene:true}
  },
  {
    path: '/tejia',
    name: 'Tejia',
    component: () => import( '../views/tejia.vue'),
    meta:{show:true,header2:true,show2:true,scene:true}
  },
  {
    path: '/shichi',
    name: 'Shichi',
    component: () => import( '../views/shichi.vue'),
    meta:{show:true,header2:true,show2:true,scene:true}
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import( '../views/info.vue'),
    meta:{show:true,header2:false,show2:true,scene:false}
  },
  // {
  //   path: '/',
  //   name: 'Pubuliu',
  //   component: () => import( '../views/pubuliu.vue'),
  //   meta:{show:true,show2:true,scene:true}
  // },
  {
    path: '/youxuan',
    name: 'Youxuan',
    component: () => import( '../views/youxuan.vue'),
    meta:{show:true,header2:true,show2:true,scene:true,}
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
    meta:{show:true,header2:true,scene:false,}
  },
  {//选项
    path:'/options',
    name:'Options',
    component:()=> import('../views/options.vue')
  },
  {//收藏夹
    path:'/collect',
    name:'Collect',
    component:()=> import('../views/collect.vue'),
    meta:{show:true,header2:true,show2:false}
  },{//购物车
    path:'/gouwuche',
    name:'Gouwuche',
    component:()=> import('../views/gouwuche.vue'),
    meta:{show:false,show2:true}
  },{//客服
    path:'/kefu',
    name:'Kefu',
    component:()=> import('../views/kefu.vue'),
    meta:{show:false,show2:false}
  },{//店铺
    path:'/dianpu',
    name:'Dianpu',
    component:()=> import('../views/dianpu.vue'),
    meta:{show:true,show2:true}
  },{
    path:'/login',
    name:'Login',
    component:()=> import('../views/login.vue'),
    meta:{show:false,show2:false}
  },{
    path:'/register',
    name:'Register',
    component:()=> import('../views/register.vue'),
    meta:{show:false,show2:false}
  },{
    path:'/dingdan',
    name:'Dingdan',
    component:()=> import('../views/dingdan.vue'),
    meta:{show:true,show2:false}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
