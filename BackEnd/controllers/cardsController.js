const axios = require('axios');

const CARDS_API_URL = 'http://localhost:8000/cards' //不管是post还是delete，这里的url都一样，所以先单独拿出来

//第一个call back function：
const getCardById = async function(req,res,next){
    const {id} = req.query;//先通过动态参数拿到id
    console.log('id',id);
    if(!id){ //先判断是否有id，没有id的返还这个400 message给前端
        return res.status(400).send('Id is required');
    }
    //当id可以拿到时：
    try {
        const response = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = response.data; 
        if(card.length===0){ //如果card的length是0的话，会转换成false
            return res.status(404).json({
                msg:'Card not found'
            })
        }
        res.status(200).json({
            msg:'Get card succeed',
            data:card
        })
    }  catch (error){ //如果失败了：则把流程交给中间件
        next(error)
    }
}

//第二个function：
const postCard = async function(req,res,next){
    const newCard = req.body;//这个body是一个object:{}
    if(Object.keys(newCard).length ===0){
        return res.status(400).send('Card is required')
    } //这个Object.keys方法可以拿到这个object里的所有的key，并存到一个array里面。如果length=0，说明什么都没拿到，是个空的；
    try { //如果成功的话：
        await axios.post(CARDS_API_URL,newCard,{
            headers:{"Content-Type":"application/json"}
        });
        res.status(200).json({
            msg:'Card is created'
        })
    } catch (error) {
        next(error)
    }
}

//第三个function：
const deleteCardById = async function(req,res,next){
    const id = req.params.card_id;
    if(!id){ //如果没有这个ID：
        return res.status(400).send('Id is required');
    }
    try { //如果有这个ID：
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg:'Card is deleted'
        })
    }  catch (error) {
        next(error)
    }
}


module.exports = {getCardById,postCard,deleteCardById}