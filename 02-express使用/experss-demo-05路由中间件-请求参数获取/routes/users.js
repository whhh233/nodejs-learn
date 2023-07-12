let express = require("express");

//创建了一个路由中间件
let router=express.Router();

// /users/reg==>执行users.js中/reg对应函数

router.get("/reg",function(req,res){
    console.log("reg请求");
    //获取前端请求的url里面的/users/reg?username=aaa&password=233
    console.log(req.query);
    res.send("users reg");
});

router.get("/log",function(req,res){
    console.log("log请求");
    res.json({
        username:"zhangsan"
    });
});

//动态id
//     /users/info/1
//    /info/:id匹配到上面的请求
router.get("/info/:id",function(req,res){
    //{id:1}
    console.log(req.params);
    res.json(req.params);
})

router.post('/test',function(req,res){
    //req.body可以获取post参数
    //{username:"zhangsan"}
    console.log(req.body);
    res.json(req.body);
})

module.exports = router;