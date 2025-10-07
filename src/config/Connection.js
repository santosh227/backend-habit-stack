const mongoose = require('mongoose')

const connectToMongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGOBD_URI)
          console.log(" MongoDB connected using Mongoose");
    }
    catch(error){
        console.error(" MongoDB connection failed:", error);
    }
}
module.exports = {connectToMongo}