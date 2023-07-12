//引入express框架
let express = require("express");

//使用express创建，得到一个http服务器对象
let app = express();

//监听对应路径请求，什么对应的函数处理
//处理函数中有两个形参，第二个形参是响应对象
app.get('/',function(req,res){
    //req
    //res
    //服务器像客户端发送hello world
    console.log("有人请求数据");
    res.send('hello world');
})

//启动服务器
//两个参数，一个是端口号，一个是回调函数
//服务器启动成功，监听3000端口，回调函数就会执行
app.listen(3000,function(){
    console.log("服务器正在运行，http://127.0.0.1:3000/")
})