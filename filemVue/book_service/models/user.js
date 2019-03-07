var mongoose = require('../common/db');
// 用户数据集。
var user = new mongoose.Schema({
    username: String,
    password: String,
    userMail: String,
    userPhone: String,
    userAdmin: String,
    userPower: String,
    userStop: String,
})

// 用户的查找方法
user.statics.findAll = function(callback){
    this.find({},callback)
}

// 使用用户名查找的方式。、
user.statics.findByUserName = function(name,callback){
    this.find({username:name},callback)
}

// 登录匹配是不是拥有相同的用户名和密码并且没有处于封停的状态
user.statics.findUserLogin = function(name,password,callback){
    this.find({username:name,password:password,userStop:false},callback)
}

// 验证邮箱、电话和用户名找到用户
user.static.findUserPassword = function(name,email,phone,callback){
    this.find({username:name,userPhone:phone,userMail:email},callback)
}

var userModel = mongoose.model('user',user)
module.exports = userModel