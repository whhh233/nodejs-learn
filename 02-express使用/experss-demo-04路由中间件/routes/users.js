let express = require("express");

//创建了一个路由中间件
let router=express.Router();

// /users/reg==>执行users.js中/reg对应函数

router.get("/reg",function(req,res){
    console.log("reg请求");
    res.send("users reg")
});

router.get("/log",function(req,res){
    console.log("log请求");
    res.json({
        username:"zhangsan"
    });
});

module.exports = router;