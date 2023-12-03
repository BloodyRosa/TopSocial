const express = require('express');
const messageRouter = express.Router();
const {getMessage} = require('../controllers/messageController');

messageRouter.get('/',getMessage)






module.exports = messageRouter;