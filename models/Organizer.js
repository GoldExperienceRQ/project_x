const mongoose = require("mongoose")

const organizerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

}, {collection: "organizers"})

module.exports = mongoose.model("Organizer", organizerSchema)