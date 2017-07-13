/**
 * Created by Jesonhu on 2017/7/13 0013.
 */
import axios from 'axios'
import host from '../config/host'

axios.default.timeout = 5000

function fetchGet () {
  return new Promise((resolve, reject) => {
    axios.get(host.shopCart.list)
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data')
          resolve(res.data.data)
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
      })
      .catch((err) => {
        console.log(err)
      })
    return [2]
  }
}
