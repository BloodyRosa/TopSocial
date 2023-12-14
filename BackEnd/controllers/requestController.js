const axios = require('axios');//问json server拿这个data

const getRequest = async function(req,res,next){
    try {
        const url = 'http://localhost:8000/request';
        const response = await axios.get(url);
        console.log('response', response)
        res.status(200).json({
            msg:'Get request succeed',
            data:response.data
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {getRequest};