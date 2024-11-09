const GenericService = require("../service/GenericService");
const {Visitor, Organizer, Event, Visitor_Event} = require("../models")


const events = new GenericService(Event);
const visitors = new GenericService(Visitor);


async function get_events(server)
{
    server.get("/events", async (req, res)=>{
        let data= await events.getAll().exec();
        res.json(data);
    })
    console.log("Setting get events");
}

async function get_visitors(server)
{
    server.get("/visitors", async (req, res)=>{
        let data= await visitors.getAll().exec();
        res.json(data);
    })
    console.log("Setting get visitors");
}


async function setGetters(server) {
    await get_events(server);
    await get_visitors(server);
}


module.exports=setGetters;

