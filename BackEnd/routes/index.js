//把所有编写的路由都导入到这个入口文件里。
const express = require('express');
const profileRouter = require('./profile');
const messageRouter = require('./message');
const highlineRouter = require('./highline');
const requestRouter = require('./request');
const cardsRouter = require('./cards');


//create head router,把每个小router挂在这个head router上
const router = express.Router();

router.use('/profile',profileRouter);
router.use('/message',messageRouter);
router.use('/highline',highlineRouter);
router.use('/request',requestRouter);
router.use('/cards',cardsRouter);




//导出这个head router
module.exports = router;
