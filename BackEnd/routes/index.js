//把所有编写的路由都导入到这个入口文件里。
const express = require('express');
const profileRouter = require('./profile');
const messageRouter = require('./message');

//create head router,把每个小router挂在这个head router上
const router = express.Router();

router.use('/profile',profileRouter);
router.use('/message',messageRouter);




//导出这个head router
module.exports = router;
