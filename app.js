const http = require('http')
const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// const sql = require('./module/mysql')
const PORT = 800

//http(post)方式
// app.use(bodyParser.json()); //用json格式来接收数据
// app.use(bodyParser.urlencoded({extended: true}));//true 可以接收任何类型的数据

//使用路由
app.use('/api', require('./router/index.js'))

let server = http.createServer(app).listen(PORT)

//便利提示
console.log(`Server running on 127.0.0.1:${PORT}`)

  
