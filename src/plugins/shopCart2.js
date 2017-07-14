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
          // console.log('init shopCart data bb')
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
    let arr = []
    return axios.get(host.shopCart.list)
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data aa')
          arr = res.data.data
          console.log(arr)
          return arr
        }
      })
      .catch((err) => {
        reject(error)
      })
  },
  getRemoteData1 () {
    // let aa = '[{"desc":"今日特惠","checked":true,"count":1,"cover":"https://m.360buyimg.com/mobilecms/jfs/t4438/288/4120880312/6787/cd3d3abb/5909ac04Nf135d13d.jpg!q70.jpg","id":14,"link":null,"oldprice":"88","price":"66","sectype":6,"title":"生活娱乐","type":2}]'
    let data = axios.get(host.shopCart.list).then((res) => {
         //arr = res.data.data
         // console.log(res.data.data)
         return res.data.data
      })
    // return JSON.parse(aa);
      // .catch((err) => {
      //   // reject(error)
      // });
  }
}
