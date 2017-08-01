/**
 * Created by Jesonhu on 2017/7/13.
 */
import axios from 'axios'
import host from '../../config/host'
import shopCart from '../../plugins/shopCart2'

const state = {
  selectedGoods: []
}

const actions = {
  // 请求后台获取shopCart购物车数据
  fetchGet ({ commit }) {
    axios.get(host.shopCart.list)
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data')
          // resolve(res.data.data)
          // console.log(res.data.data)
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
  updateShopCart({commit, state}, payload) {
    let ADDSHOPCART = 3;
      // 判断添加到购物车的商品是否已经在购物车中存在
      // 存在,更新对应购物商品的count
      // 不存在，往购物车数据数组中末尾添加这个商品
      let isSame = false;
      for (let i = 0;i < state.selectedGoods.length; i++) {
        if (state.selectedGoods[i].id === payload.id) {
          isSame = true
          // 复制一份已被添加到购物车的这个商品，避免对象间引用问题
          const updataGoods = Object.assign({}, state.selectedGoods[i])
          updataGoods.count += payload.count
          console.log(updataGoods)
          commit('UPDATE_SHOPCART', {
            change: updataGoods,
            index: i,
            action: 1
          })
          updataBackEndShopCart({
            action: 1,
            data: updataGoods,
            index: i,
          })
        }
      }
      if (!isSame) {
        payload.checked = false
        commit('ADD_SHOPCART', payload)
        updataBackEndShopCart({
          action: 0,
          data: payload
        })
      }
      function updataBackEndShopCart(data) {
          console.log(data)
          axios.post(host.shopCart.update, data).catch((err) => {
              console.log(err)
          })
      }

  },

  removeShopCart ({commit}) {
    commit('REMOVE_SHOPCART')
  }
}

const getters = { // 类似利于computed
  // 已经加入购物车商品总数量
  totalCount: state => {
    let total = 0
    const length = state.selectedGoods.length
    if (length > 0) {
      state.selectedGoods.forEach((item) => {
          total += item.count
      })
    }
    return total
  }
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
  /* 获取购物车里的商品 */
  GET_SHOPCART (state, playload) {
    return state.selectedGoods;
  },

  /* 更新购物车里商品的信息 */
  UPDATE_SHOPCART (state, playload) {
    let REMOVE = 0;
    // 购物车页面获取了vuex购物车数据,直接修改了vuex的购物车数据状态
    let UPDATE = 1;
    let SELECT_ALL = 2;
    // 通过商品详情页面，将当前商品添加到购物车
    let ADDSHOPCART = 3;
    let index = playload.index;
    let selectGood = playload.change;
    let action = playload.action;

    if ( action === UPDATE ) { // 更新购物车中的某项
      state.selectedGoods.splice(index, 1, selectGood);
    } else if ( action === REMOVE ){ // 删除购物车中的某项
      state.selectedGoods.splice(index, 1);
    } else if ( action === SELECT_ALL ) {
      state.selectedGoods.forEach((item) => {
        item.checked = playload.checked
      })
    }
  },

  /* 清空购物车 */
  REMOVE_SHOPCART (state) {
    state.selectedGoods = {}
  }
}

// 模块化写法必须暴露出去
export default {
  state,
  actions,
  getters,
  mutations
}
