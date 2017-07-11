const express = require('express')
const sql = require('../module/mysql')
let router = express.Router()

// 顶部banner
router.get('/banner/1', (req, res) => {
    const sqlStr1 = 'SELECT * FROM banner'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

// 顶部菜单
router.get('/nav/1', (req, res) => {
    const sqlStr1 = 'SELECT * FROM mobile_nav'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

router.get('/banner/2', (req, res) => {
    const sqlStr1 = 'SELECT * FROM banner order by id desc'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})
// 快报
router.get('/news/1', (req, res) => {
    const sqlStr1 = 'SELECT * FROM news'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

// 秒杀图片
router.get('/goods_list/0/0', (req, res) => {
    const sqlStr1 = 'SELECT * FROM goods_list limit 8'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

// 爱生活
router.get('/goods_list/1/1', (req, res) => {
    const sqlStr1 = 'SELECT * FROM goods_list order by id desc limit 8'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

// 购特色
router.get('/goods_list/2/1', (req, res) => {
    const sqlStr1 = 'SELECT * FROM goods_list limit 6'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

// 推荐
router.get('/goods_recomment/12', (req, res) => {
    const sqlStr1 = 'SELECT * FROM goods_list order by id desc'
    
    sql(sqlStr1, (err, data) => {
        if (!err) {
            res.json({
                data: data
            })
        } else {
            console.log(err)
        }
    })
})

// 详情
router.get('/goods_detail/:id', (req, res) => {
    const id = req.params.id
    const sqlStr = 'SELECT * FROM `goods_list` WHERE id = ?'
    sql(sqlStr, [id], (err, data) => {
        res.json({
            data: data
        })
    })
})

module.exports = router
