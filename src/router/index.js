import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Regist from '@/views/Regist.vue'
import Start from '@/views/Start.vue'
import Myown from '@/views/Myown.vue'
import Test from '../views/Test'
import ShowOwn from '../views/ShowOwn'
import Detail from '../views/Detail'
import GoodsList from '../views/GoodsList'
import AddGoods from '../views/AddGoods'
import SearchGoods from '../views/Goods/SearchGoods'

Vue.use(VueRouter)

const routes = [
  {
    path: '/myown',
    component: Myown,
    name: 'Myown'
  },
  {
    path: '/searchGoods',
    component: SearchGoods
  },
  {
    path: '/ShowOwn',
    component: ShowOwn

  },
  {
    path: '/goodslist',
    component: GoodsList
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regist',
    component: Regist
  },
  {
    path: '/start',
    component: Start,
    name: 'start'
  },
  {
    path: '/regist',
    redirect: 'regist'
  },
  {
    path: '/detail/:myid',
    component: Detail,
    name: 'detail'
  },
  {
    path: '/addgoods',
    component: AddGoods
  },
  {
    path: '/*',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
