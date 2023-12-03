const express = require('express');
const profileRouter = express.Router();
const axios = require('axios');
const {getProfile} = require('../controllers/profileController');

profileRouter.get('/',getProfile)





//把这个profile模块导出，让前端得以使用
module.exports = profileRouter;