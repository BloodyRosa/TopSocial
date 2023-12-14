//失败了都会统一返回500，所以直接写在这儿

const handleErrors = function(err,req,res,next){
    const statusCode = err.statusCode || 500; 
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({error:message})
}

module.exports = {handleErrors}