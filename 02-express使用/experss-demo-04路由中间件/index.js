let express = require("express");
let app=express();

let usersrouter = require("./routes/users");


app.use('/users',usersrouter);



app.listen(3000,()=>{
    console.log("服务器启动成功");
})