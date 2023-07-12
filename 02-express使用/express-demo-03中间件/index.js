let express = require("express");
let app = express();


//
app.use(function(req,res,next){
    //req请求的相关信息--请求路径-参数
    //res响应请求的想啊管信息，res.send("")
    //next函数==如果我们调用了next，就会去执行下一个匹配到路由的中间件
    console.log("中间件1");
    next();
},function(req,res,next){
    console.log("中间件2");
    next();
});
let login = require("./login.js");
app.get("/login",login,function(req,res,next){
    //req请求的相关信息--请求路径-参数
    //res响应请求的想啊管信息，res.send("")
    //next函数==如果我们调用了next，就会去执行下一个匹配到路由的中间件
    console.log("登陆000");
    next();
},function(req,res,next){
    console.log("中间件1234");
    res.send("login");
    next();
});
app.listen(3000,function(){
    console.log("服务器启动成功");
});
