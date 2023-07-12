let express = require("express")
let app =express()

//路由配置
//用户访问了http://127.0.0.1:3000/users/login
// app.use('/users/login',function(req,res){
//     console.log("/user/login");
//     res.send("hello 登陆中");
// });

// app.use('/users/register',function(req,res){
//     console.log("/user/register");
//     res.send("hello 注册中");
// });

//用户访问了http://127.0.0.1:3000/users/login
//并使用请求方式为get
app.get('/users/login',function(req,res){
    console.log("/user/login");
    res.send("hello 登陆中");
});

//用户访问了http://127.0.0.1:3000/users/register
//并使用请求方式为post
app.post('/users/register',function(req,res){
    console.log("/user/register");
    res.send("hello 注册中");
});

app.listen(3000,function(){
    console.log("服务器正在运行，http://127.0.0.1:3000/")
});