/**
 * Created by Jesonhu on 2017/7/13 0013.
 */
const STORAGE_USER_KEY = 'STORAGE_USER_KEY'

export default {
  // get
  getLocal (key = STORAGE_USER_KEY) {
    console.log('get local operation')
    return JSON.parse(window.localStorage.setItem(key))
  },

  // set
  setLocal (res, key = STORAGE_USER_KEY, isSaveOldData = false) {
    console.log('set local operation')
    if (isSaveOldData) {
      let oldData = this.getLocal(key)
      const newData = JSON.stringify(oldData, concat(res))
      return window.localStorage.setItem(key, newData)
    }
    return window.localStorage.setItem(key, JSON.stringify(res))
  },

  // remove
  removeLocal (key = STORAGE_USER_KEY) {
    console.log('remove local operation')
    window.localStorage.removeItem(key)
  }
}
