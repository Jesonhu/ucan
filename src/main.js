// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index';
import store from './store';
import App from './App';
import './config/rem';
import FaskClick from 'fastclick';
import Mint from 'mint-ui';

/* fastclick使用 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FaskClick.attach(document.body);
  });
};

Vue.use(VueRouter);
Vue.use(Mint);

const router = new VueRouter({
  linkActiveClass: 'active', // 自定义路由切换类名
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
