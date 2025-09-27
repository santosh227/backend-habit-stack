const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

app.get('/',(req,res)=>{
    res.status(200).json({message : "server created"})
})


app.listen(process.env.PORT,()=>{
    console.log(`server stated sucessfully ${process.env.PORT}`);
    
})