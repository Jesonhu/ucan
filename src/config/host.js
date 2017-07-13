/**
 * Created by Jesonhu on 2017/7/12.
 */
import config from './index'
const domain = config.BASE_URL

const host = {
  domain: domain,
  index: { // 首页
    banner: `/api/top/banner`,
    nav: `/api/mainNav`,
    topNews: `/api/scroll/news`,
    seckill: `/api/seckill`,
    life: `/api/life`,
    featureBanner: `/api/life/banner`,
    featureList: `/api/feature`,
    recommend: `/api/recommend`
  },
  product: { // 产品
    list: '',
    detail: `/api/product/detail`
  },
  shopCart: {
    list: '/api/get/shopcart'
  }
}

export default host
