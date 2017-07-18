import home from '../page/home/home';
import list from '../page/list/list';
import mm from '../page/mm/mm';
import shopcart from '../page/shopcart/shopcart';
import goods from '../page/product/detail.vue'; // 商品详情
import mine from '../page/user/info';
import login from '../page/user/login.vue'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/list',
    component: list
  },
  {
    path: '/product/detail',
    name: 'proDetail',
    component: goods
  },
  {
    path: '/mm',
    component: mm
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/login',
    component: login
  }
];
