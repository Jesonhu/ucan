/**
 * Created by Jesonhu on 2017/7/13 0013.
 */
import axios from 'axios'
import host from '../config/host'

export default {
  async getRemoteData () {
    let result = []
    await axios.get(host.shopCart.list)
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data')
          console.log(res.data.data)
          resolve(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    return result
  }
}
