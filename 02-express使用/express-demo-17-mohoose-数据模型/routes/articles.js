var express = require('express');
var router = express.Router();

/* GET home page. */
// /api/articles
//发布文章
router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.auth);
  res.json({
    code:1,
    msg:"发布成功"
  })
});

//根据用户id获取文章列表
//  /api/articles//users/:id
router.get('/users/:id', function(req, res, next) {
  console.log(req.params);  //{uid:1}
  res.json({
    code:1,
    msg:"根据用户id获取文章列表成功"
  })
});

//根据文章aid获取文章列表
//  /api/articles//:aid
router.get('/:aid', function(req, res, next) {
  console.log(req.params);  //{uid:1}
  res.json({
    code:1,
    msg:"根据文章aid获取文章列表成功"
  })
});

//根据文章aid编辑文章
//  /api/articles//:aid
router.patch('/:aid', function(req, res, next){
  console.log(req.params);  //{uid:1}
  console.log(req.body)
  res.json({
    code:1,
    msg:"根据文章aid编辑文章成功"
  })
});

//根据文章aid删除文章
//  /api/articles//:aid
router.delete('/:aid', function(req, res, next){
  console.log(req.params);  //{uid:1}
  res.json({
    code:1,
    msg:"根据文章aid删除文章成功"
  })
});


module.exports = router;
