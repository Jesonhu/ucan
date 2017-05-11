/**
 * 创建一个Vuex的store
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);

/* 创建一个store的state数据源 */
const state = {
  selectedGoods: []
};

/* 添加state到Vuex.store并导出创建的Vuex.store */
export default new Vuex.Store({
  state,
  actions,
  mutations
});

