const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const {connectToMongo} = require('./src/config/Connection')
const apiRoutes = require('./src/routes/index')

app.get('/',(req,res)=>{
    res.status(200).json({message : "server created"})
})
app.use('/api',apiRoutes)
connectToMongo();

app.listen(process.env.PORT,()=>{
    console.log(`server stated sucessfully ${process.env.PORT}`);
    
})