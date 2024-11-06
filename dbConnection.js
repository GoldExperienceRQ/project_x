const mongoose = require("mongoose")

async function connectToDatabase(){

    try{
        await mongoose.connect('mongodb://localhost:27017/event_management')
        console.log("Connected to db")
    }catch(err){
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
}

module.exports = connectToDatabase