var express = require('express');
var router = express.Router();
var {expressjwt} = require("express-jwt");

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({
    code:1,
    msg:"注册成功",
  })
});
let jwt = require("jsonwebtoken")
router.get('/', function(req, res, next) {      
  console.log(req.query);
  //如果登录成功，返回jwt，并在token中存入用户名
  if(req.query.username == 'admin'&& req.query.password == '12345'){
    let token = jwt.sign(
    {username:"admin"},"test12345",
    {expiresIn:'120s',algorithm:'HS256'});
    res.json({
      code:1,
      msg:"登陆成功",
      token,
    })
  }
  else{
    res.json({
      code:0,
      msg:"登陆失败",
    })
  }


});
module.exports = router;
