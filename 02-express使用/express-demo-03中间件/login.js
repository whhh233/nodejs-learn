function fn(req,qres,next){
    console.log("登陆中间件");
    next();
}
module.exports=fn;