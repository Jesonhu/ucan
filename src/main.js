// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index';
import store from './store';
import './config/rem';
import FaskClick from 'fastclick';

/* fastclick使用 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FaskClick.attach(document.body);
  });
};

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app');
