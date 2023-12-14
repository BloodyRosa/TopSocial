//git init
//npm init
//npm i nodemon concurrently -D
//npm i express cors json-server axios
//检查git是否和github上的远程repo连接上：git remote -v
//第一次push会不成功，因为没有branch，要写：git push --set-upstream origin master

const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const {handleErrors} = require('./middleware/errorMiddleware')

//create web server
const app = express();

//帮cors注册一个全局中间件
app.use(cors()); 

//解析json数据
app.use(express.json());

//call API
app.use('/api',router);

//注册handleError中间件（记得这个要写在API Call后面，要call失败了才会走到这个中间件来
app.use(handleErrors)





const PORT = 80;
app.listen(PORT, function(){
    console.log('Server is running on http://localhost:80')
})

//然后把web server跑起来：npx nodemon index.js

//启动在package.json里通过script自定义的server：
//npm run server(前面自定义的server名)