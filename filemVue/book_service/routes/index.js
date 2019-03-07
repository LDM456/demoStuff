var express = require('express');
// 路由引入
var router = express.Router();
// 数据库的引入
var mongoose = require('mongoose')

// 定义路由
/** get home page*/ 
router.get('/',function(req,res,next){
  res.render('index',{title:'express'})
});

// 定义路由
router.get('/mongooseText',function(req,res,next){
  mongoose.connect('mongodb://localhost/pest',{
    useMongoClient:true
  });
  mongoose.Promise = global.Promise;

  var  Cat = mongoose.model('Cat',{name:String});

  var tom = new Cat({name:'Tom'})
  tom.save(function(err){
    if(err){
      console.log(err);
    }else{
      console.log('success insert');
    }
  });
  res.send('数据库链接测试')
})

module.exports = router;
