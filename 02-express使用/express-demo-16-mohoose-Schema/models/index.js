let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/test-blog").then((res) => {
    console.log("连接成功");
})
.catch((err)=>{
    console.log("连接失败");
});

let Schema=mongoose.Schema;

//定义表结构
let ArticleSchema = new Schema(
    {
        title: String,
        content: String,
        author: String,
        tag: String,
        views:{
            type:Number,
            default:0,
        },
    },
    {
        timestamps:true,
    }
);

//创建数据模型--根据表结构创建数据模型--映射到Articles表中
//Article 通过这个对象我们可以对数据库进行增删改查
let Article = mongoose.model("Article",ArticleSchema);


