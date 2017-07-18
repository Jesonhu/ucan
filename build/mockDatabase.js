/**
 * Created by Jesonhu on 2017/7/13.
 */
const express = require('express')
const apiRoutes = express.Router()

const topBanner = require('../src/mock/banner.json')
const conBanner = require('../src/mock/conBanner.json')
const mainNav = require('../src/mock/mobileNav.json')
const scrollNews = require('../src/mock/scrollNews.json')
const goodsList = require('../src/mock/goodsList.json')
const goodsDetail = require('../src/mock/goodsDetail.json')
const shopCart = require('../src/mock/shopCart.json')

// 获取顶部banner
apiRoutes.get('/top/banner', (req, res) => {
  res.send(topBanner)
})

// 获取顶部滚动新闻
apiRoutes.get('/scroll/news', (req, res) => {
  res.send(scrollNews)
})

// 获取10大金刚
apiRoutes.get('/mainNav', (req, res) => {
  res.send(mainNav)
})

// 秒杀数据
apiRoutes.get('/seckill', (req, res) => {
    const initData = goodsList.data.slice(5, 12)
    res.json({
      data: initData
    })
})

// 爱生活
apiRoutes.get('/life', (req, res) => {
  const initData = goodsList.data.slice(0, 8)
  res.json({
    data: initData
  })
})

// 爱生活banner
apiRoutes.get('/life/banner', (req, res) => {
    const initData = topBanner.data.slice(5)
    res.json({
      data: initData
    })
})

// 购特色
apiRoutes.get('/feature', (req, res) => {
    const initData = goodsList.data.slice(3, 9)
    res.json({
      data: initData
    })
})

// 推荐
apiRoutes.get('/recommend', (req, res) => {
    res.send(goodsList)
})

// 商品详情
apiRoutes.get('/product/detail/:id', (req, res) => {
    const paramId = req.params.id
    const dataArr = goodsList.data
    let resultData = null
    // console.log(paramId)
    for (let i = 0, length = dataArr.length; i < length; i++ ) {
      if (dataArr[i].id == paramId) {
        resultData = dataArr[i]
      }
    }
    res.json({
      data: resultData
    })
})

// 数据库中购物车数据
  apiRoutes.get('/get/shopcart', (req, res) => {
  res.send(shopCart)
})

module.exports = apiRoutes

