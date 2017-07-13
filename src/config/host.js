/**
 * Created by Jesonhu on 2017/7/12.
 */
import config from './index'
const domain = config.BASE_URL

const host = {
  domain: domain,
  index: { // 首页
    banner: `${domain}api/banner/1`,
    nav: `${domain}api/nav/1`,
    topNews: `${domain}api/news/1`,
    seckill: `${domain}api/goods_list/0/0`,
    life: `${domain}api/goods_list/1/1`,
    featureBanner: `${domain}api/banner/2`,
    featureList: `${domain}api/goods_list/2/1`,
    recommend: `${domain}api/goods_recomment/12`
  }
}

export default host
