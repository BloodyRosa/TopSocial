const axios = require('axios');//问json server拿这个data

const getMessage = async function(req,res,next){
    try {
        const url = 'http://localhost:8000/message';
        const message = await axios.get(url);
        res.status(200).json({
            msg:'Get message succeed',
            date:{
                message:message.data
            }
        })
    } catch (error) {
        next(error)       
    }
}

module.exports = {getMessage};