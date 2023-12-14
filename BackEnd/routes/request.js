const express = require('express');
const requestRouter = express.Router();

const axios = require('axios');
const {getRequest} = require('../controllers/requestController')


requestRouter.get('/',getRequest);

module.exports = requestRouter;