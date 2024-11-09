const express = require("express");
const server = express();
const port =8080;
const eventsRouter = require("./routers/eventsRouter");
const visitorsRouter = require("./routers/visitorsRouter");

const connectToDatabase = require("../dbConnection");
const bodyParser = require('body-parser');


server.use(express.json());

connectToDatabase()
server.listen(port, ()=>{
    console.log(`Server running on port `+port)
});
server.use("/events", eventsRouter);
server.use("/visitors", visitorsRouter);

