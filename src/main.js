// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index';
import store from './store';
import App from './App';
import './config/rem';
import FaskClick from 'fastclick';
import 'babel-polyfill'

import MintUI from 'mint-ui';
import { Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import host from './config/host'
Vue.prototype.host = host

/* fastclick使用 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FaskClick.attach(document.body);
  });
};

Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(Lazyload);

const router = new VueRouter({
  linkActiveClass: 'active', // 自定义路由切换类名
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
