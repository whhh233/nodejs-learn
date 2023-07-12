var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
restful api

get请求获取所有的用户信息
/users
*/
router.get('/', function(req, res, next) {
  //获取传参
  console.log(req.query);
  //数据库操作
  //返回json的数据
  res.json({
    code:1,//code 1操作成功 0 操作失败
    msg:"查询成功",
    data:[
      //查询的数据存入data
      {id:1,username:"zhangsan"},
      {id:2,username:"lisi"},]
    });
});


/*
新建用户
post请求 /users   请求体中username   password
*/
router.post("/",function(req,res){
  //1-请求的参数
  console.log(req.body);
  //2-数据库操作
  //3-返回json数据
  res.json({
    code:1,//code 1操作成功 0 操作失败
    msg:"创建成功",
    data:[
      //查询的数据存入data
      {id:1,username:"zhangsan"}]
    });
})





/*
获取对应ID的用户信息
GET请求 /users/:id
*/
//动态ID
router.get('/:id', function(req, res, next) {
  //1-获取参数
  console.log(req.params);
  //2-数据库操作
  //3-返回json数据
  res.json({
    code:1,
    msg:"获取成功",
    data:{id:1,username:"zhangsan"}

  })
});

/*
更改密码
PATCH请求 /users/:id   请求体中传入用户密码
*/
//动态ID
router.patch('/:id', function(req, res, next) {
  //1-获取参数
  console.log(req.params);
  console.log(req.body);
  //2-数据库操作
  //3-返回json数据
  res.json({
    code:1,
    msg:"更改成功"

  })
});


/*
删除用户
DELETE请求 /users/:id   
*/
//动态ID
router.delete('/:id', function(req, res, next) {
  //1-获取参数
  console.log(req.params);
  //2-数据库操作
  //3-返回json数据
  res.json({
    code:1,
    msg:"删除成功"

  })
});
module.exports = router;
