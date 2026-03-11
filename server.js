require('dotenv').config()
const app = require('./src/app');
const connectDB = require('./src/db/db')

connectDB()

app.listen(3000,()=>{
    console.log("Server runs on the port 3000");
})