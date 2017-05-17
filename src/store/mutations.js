/**
 *  提交mution使用另一种方式：传递一个对象，对象必须包含 type: ''
 *  mutaion-types 保存 mutation的type 或者不拆分mution的type
 */

/* 拆分方法 */
/*
import {

} from './mutation-types';
*/

/* 不拆分方式 */
const ADD_SHOPCART = 'ADD_SHOPCART';
const ADD_SHOPCARTCOUNT = 'ADD_SHOPCARTCOUNT';
const GET_SHOPCART = 'GET_SHOPCART';
const UPDATE_SHOPCART = 'UPDATE_SHOPCART';

export default {

  /* 添加商品到购物车里 */
  [ADD_SHOPCART](state, playload) {
    // 选择的商品添加到 Vuex.store state里
    state.selectedGoods.push(playload);
  },
  /* 已选择商品数量增加 */
  [ADD_SHOPCARTCOUNT](state, playload) {

  },
  /* 获取购物车里的商品 */
  [GET_SHOPCART](state, playload) {
    return state.selectedGoods;
  },

  /* 更新购物车里商品的信息 */
  [UPDATE_SHOPCART](state, playload) {
    let UPDATE = 1;
    let REMOVE = 0;
    let index = playload.index;
    let selectGood = playload.change;
    let action = playload.action;

    if ( action === UPDATE ) { // 更新购物车中的某项
      state.selectedGoods.splice(index, 1, selectGood);
    } else if ( action === REMOVE ){ // 删除购物车中的某项
      state.selectedGoods.splice(index, 1);
    }
  }
};
