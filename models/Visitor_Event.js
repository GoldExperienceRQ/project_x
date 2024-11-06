const mongoose = require("mongoose")

const visitors_eventsSchema = new mongoose.Schema({
    visitor_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Visitor"
    },
    event_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Event"
    }
}, {collection: "visitors_events"})

visitors_eventsSchema.index({ visitor_id: 1, event_id: 1 }, { unique: true });

module.exports = mongoose.model("Visitors_Events", visitors_eventsSchema)