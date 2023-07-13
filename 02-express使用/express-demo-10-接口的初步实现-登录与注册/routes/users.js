var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({
    code:1,
    msg:"注册成功",
  })
});

router.get('/', function(req, res, next) {
  console.log(req.query);
  res.json({
    code:1,
    msg:"登陆成功",
  })
});
module.exports = router;
