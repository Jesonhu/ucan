/**
 * Created by Jesonhu on 2017/7/13.
 */
import axios from 'axios'
import host from '../../config/host'

const state = {
  selectedGoods: []
}

const actions = {
  // 后台获取shopCart购物车数据
  fetchGet ({ commit }) {
    axios.get(host.shopCart.list)
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data')
          // resolve(res.data.data)
          commit('INIT_GET_SHOPCART', res.data.data)
        }
      })
      .catch((err) => {
        // reject(error)
      })
  },

  /* 提交mutaion:获取购物车数据 */
  /*getDaShopCart(context) {  // 未简写方式
   context.commit('GET_SHOPCART')
   }*/
  getShopCart({ commit }) { // es6 参数解构简写方式
    commit('GET_SHOPCART')
  },


  /* 添加商品到购物车里面 */
  addShopCart({ commit, state }, selectedGoods) {
    // console.log( selectedGoods );
    commit('ADD_SHOPCART', selectedGoods);
  },
  /*addShopCart(content) {
   content.commit({
   type: 'ADD_SHOPCART',
   selectedGoods: 10
   });
   }*/

  /* 更新购物车里的商品信息 */
  updateShopCart({commit}, nowSelectedGoods) {
    // console.log(nowSelectedGoods);
    commit('UPDATE_SHOPCART', nowSelectedGoods);
  },
}

const mutations = {
  // 初始后台数据到vuex购物车
  INIT_GET_SHOPCART (state, playload) {
    state.selectedGoods = playload
  },

  /* 添加商品到购物车里 */
  ADD_SHOPCART (state, playload) {
    // 选择的商品添加到 Vuex.store state里
    state.selectedGoods.push(playload);
  },
  /* 已选择商品数量增加 */
  ADD_SHOPCARTCOUNT (state, playload) {

  },
  /* 获取购物车里的商品 */
  GET_SHOPCART (state, playload) {
    return state.selectedGoods;
  },

  /* 更新购物车里商品的信息 */
  UPDATE_SHOPCART (state, playload) {
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
}

// 模块化写法必须暴露出去
export default {
  state,
  actions,
  mutations
}
