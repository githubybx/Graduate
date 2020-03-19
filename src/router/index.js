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
import UpLoadImage from '../views/Marking/UpLoadImage'
import GoodsGrade from '../views/Marking/GoodsGrade'
import GoodsGradeDetail from '../views/Marking/GoodsGradeDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/myown',
    component: Myown,
    name: 'Myown'
  },
  {
    path: '/goodsgradedetail',
    component: GoodsGradeDetail
  },
  {
    path: '/uploadimage',
    component: UpLoadImage
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
    path: '/goodsGrade',
    component: GoodsGrade
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
