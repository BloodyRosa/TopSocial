const express = require('express');
const { getCardById, postCard, deleteCardById } = require('../controllers/cardsController');

const cardsRouter = express.Router();

//第一个API：查询cards by ID：/api/cards?id=1 
cardsRouter.get('/',getCardById);

//第二个API: 创建一个card并存到json server里: /api/cards
cardsRouter.post('/',postCard);

//第三个API: 前端传card的动态参数给后端，并执行删除：/api/cards/:card_id
cardsRouter.delete('/:card_id',deleteCardById)





module.exports = cardsRouter;