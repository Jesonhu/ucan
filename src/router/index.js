import App from '../App';

// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
import home from '../page/home/home';
import list from '../page/list/list';
import mm from '../page/mm/mm';
import shopcart from '../page/shopcart/shopcart.vue';
import mine from '../page/mine/mine';

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
  }
];
