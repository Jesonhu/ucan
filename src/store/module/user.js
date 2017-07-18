/**
 * Created by Jesonhu on 2017/7/13.
 */
import cookie from '../../plugins/cookie'
import { Toast } from 'mint-ui'

const state = {
  // 加载就获取本地存储,有就返回本地用户，没有就是初始值
  localUserInfo: cookie.getLocal() || {}
}
const actions = {
  setUserInfo ({commit}, res) {
    cookie.setLocal(res)
    commit('SET_USER', res)
    Toast({
      message: '欢迎回来',
      position: 'middle',
      iconClass: 'icon icon-success',
      duration: 1000
    })
  },
  removeUserInfo ({commit}) {
    cookie.removeLocal()
    commit('REMOVE_USER')
  },
  checkUserInfo ({commit}, res) {
    cookie.getLocal(res)
    commit('CHECK_USER', res)
  }
}

const getters = {
  localUserInfo: (state) => {
    return state.localUserInfo
  }
}
const mutations = {
  SET_USER (state, res) {
    state.localUserInfo = res
  },
  REMOVE_USER (state) {
    state.localUserInfo = {}
  },
  CHECK_USER (state, res) {
    if (res === 'undefined') {
      return false
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
