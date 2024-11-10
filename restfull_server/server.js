const express = require("express");
const server = express();
const port =8080;
const eventsRouter = require("./routers/eventsRouter");
const visitorsRouter = require("./routers/visitorsRouter");
const orginizersRouter = require("./routers/orginizersRouter");
const visitorsEventsRouter = require("./routers/visitorsEventsRouter");

const connectToDatabase = require("../dbConnection");


server.use(express.json());

connectToDatabase()
server.listen(port, ()=>{
    console.log(`Server running on port `+port)
});
server.use("/events", eventsRouter);
server.use("/visitors", visitorsRouter);
server.use("/orginizers", orginizersRouter);
server.use("/visitors_events", visitorsEventsRouter);
