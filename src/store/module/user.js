/**
 * Created by Jesonhu on 2017/7/13.
 */
import cookie from '../../plugins/cookie'
import { Toast } from 'mint-ui'

const state = {
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
  }
}

const getters = {
  localUserInfo: (state) => {
    state.localUserInfo
  }
}
const mutations = {
  SET_USER (state, res) {
    state.localUserInfo = res
  },
  REMOVE_USER (state) {
    state.localUserInfo = {}
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
