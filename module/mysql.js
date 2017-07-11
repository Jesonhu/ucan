const mysql = require('mysql')

module.exports = function (handlerStr, value, callback) {
    const config = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'mynode'
    })

    config.connect()

    config.query(handlerStr, value, function (err, data) {
        callback && callback(err, data)
    })
}