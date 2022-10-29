const express = require('express');
const connectDatabase = require('./Database/index');
const cors = require("cors");
const {postRoutes} = require('./Routes/task')
const { userRoutes } = require('./Routes/user');
const app = express()
app.use(express.json())
app.use(cors())


function logger (req,res,next) {
    console.log(req.path, new Date());
    next()
}

function setRequest(req, res, next) {
    req.context = {} 
    next();
}

app.use(logger)
app.use(setRequest)
app.use(postRoutes)
app.use(userRoutes)
let PORT = 3002; 
connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listien ${PORT}`)
    })
})
