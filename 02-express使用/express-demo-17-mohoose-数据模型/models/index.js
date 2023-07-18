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

// //创建数据-插入数据库中
// Article.create({
//     title:"今天天气很好啊",
//     content:"我想要在下午的时候出去玩",
//     tag:"日常生活",
//     author:"张三",
// }).then((r) => {
//     console.log(r);
//     console.log("创建并插入成功");
// });

//创建多条数据
// Article.create([{
//     title:"11111",
//     content:"我想要在下午的时候出去玩",
//     tag:"日常生活",
//     author:"张三",
// },
// {
//     title:"22222",
//     content:"我想要在下午的时候出去玩",
//     tag:"日常生活",
//     author:"张三",
// }]).then((r) => {
//     console.log(r);
//     console.log("创建并插入成功");
// });


// let a1 = new Article({
//     title:"66666",
//     content:"我想要在下午的时候出去玩",
//     tag:"日常生活",
//     author:"张三",
// });
// a1.save().then((r)=>{
//     console.log("创建成功-插入成功"),
//     console.log(r);
// });


//删除数据
// Article.deleteOne({ _id:"64b5f4bab7d759a2508d8180"}).then((r)=>{
//     console.log(r); 
//     //{ acknowledged: true, deletedCount: 1 }
// })
// .catch((err)=>{
//     console.log(err);
// });

// Article.deleteMany({ content:/出去玩/ }).then((r)=>{
//     console.log(r); 
//     //{ acknowledged: true, deletedCount: 1 }
// })
// .catch((err)=>{
//     console.log(err);
// });


// Article.updateOne({
//     _id:"64b5f6fc7adca63adcbd3216",
// },{
//     title:"测试一下修改功能",
//     content:"测试一下修改功能-content",
// }).then((r)=>{
//         console.log(r); 
//         //{ acknowledged: true, deletedCount: 1 }
//     });


Article.updateOne({
    _id:"64b5f6fc7adca63adcbd3216",
},{
    $inc:{views:1},
},{
    timestamps:false,
}).then((r)=>{
        console.log(r); 
        //{ acknowledged: true, deletedCount: 1 }
    });