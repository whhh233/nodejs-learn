let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/test-blog").then((res) => {
    console.log("连接成功");
})
.catch((err)=>{
    console.log("连接失败");
})