// 链接数据库的中间件
var mongoose = require('mongoose')
var url = 'mongodb://localhost/movieServer'
mongoose.connect(url);
// 链接数据库
module.exports = mongoose; 