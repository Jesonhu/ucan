/**
 * Created by Jesonhu on 2017/7/13 0013.
 */
import axios from 'axios'
import host from '../config/host'

axios.default.timeout = 5000

let arr = []
function fetchGet () {
  return new Promise((resolve, reject) => {
    axios.get(host.shopCart.list)
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data aa')
          resolve(res.data.data) // res.data.data返回的是对象构成的数组 [Object, Object]
        }
      })
      .catch((err) => {
        reject(error)
      })
    })
}

export default {
  getRemoteData () {
    let dataArr = []
    fetchGet()
      .then((data) => {
        dataArr = data
        console.log(dataArr)
      })
      .catch((err) => {
        console.log(err)
      })
    return dataArr // 这里要输出ajax请求的数据
  }
}
