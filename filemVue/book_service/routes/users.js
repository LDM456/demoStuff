// 引入先关的文件和代码包
var express = require('express');
var router = express.Router();
var user = require('../models/user')
var crypto = require('crypto')
// var movie = require('../models/movie')
// var mail = require('../models/mail')
// var comment = require('../models/comment')
const init_token = 'TKL02o'

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// 新增其他几个路由地址
// 用户登录页接口
router.post('/login',function(req,res,next){

})
// 用户注册接口
router.post('/register',function(req,res,next){

})
// 用户提交评论接口
router.post('/postComment',function(req,res,next){

})
// 用户点赞接口
router.post('/support',function(req,res,next){

})
// 用户找回密码接口
router.post('/findPassword',function(req,res,next){

})
// 用户发送站内信
router.post('/sendEmail',function(req,res,next){

})
// 获取MD5值
function getMD5Password(id){

}

module.exports = router;
