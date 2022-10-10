const mongoose= require('mongoose');
require('dotenv').config();


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.xrjl0vl.mongodb.net/mernchat?retryWrites=true&w=majority`,()=>{
    console.log("db connected")
})
