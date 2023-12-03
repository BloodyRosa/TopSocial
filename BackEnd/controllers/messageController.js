const axios = require('axios');

const getMessage = async function(req,res){
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
        console.log('error',error);        
    }
}

module.exports = {getMessage};