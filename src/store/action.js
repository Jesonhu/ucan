/**
 *  提交给mutaion处理 --> mutations.js
 */
export default {

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

};

