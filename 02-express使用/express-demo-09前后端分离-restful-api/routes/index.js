var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res render渲染，把数据渲染到index.ejs上（/views）
  res.render('index', { 
    title: 'Express',
    username:"zhangsan",
    test:"<h2>aaa<h2>", 
    newsArr:["今天天气很好","12312312","asdakhds"]});
});

module.exports = router;
