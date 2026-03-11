const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGO_DATABASE_URL).then(()=>{
        console.log("Connected to DB")
    }).catch((err)=>{
        console.log("Not connected to database")
    })
}

module.exports = connectDB;