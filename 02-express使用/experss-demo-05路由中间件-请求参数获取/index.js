let express = require("express");
let app=express();

//解析前端请求的请求体的数据 x-www-form
app.use(express.urlencoded());
//解析前端请求的请求体的数据 json
app.use(express.json());

let usersrouter = require("./routes/users");


app.use('/users',usersrouter);



app.listen(3000,()=>{
    console.log("服务器启动成功");
})