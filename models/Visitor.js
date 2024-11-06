const mongoose = require("mongoose")


const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {collection: "visitors"})

module.exports = mongoose.model("Visitor", visitorSchema)