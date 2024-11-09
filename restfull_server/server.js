const express = require("express")
const server = express()
const port =8080;

const connectToDatabase = require("../dbConnection")
const getters=require("./getters");
const setGetters = require("./getters");
const bodyParser = require('body-parser');


server.use(bodyParser.json());

connectToDatabase().then(()=>{server.listen(port, ()=>{
        console.log(`Server running on port `+port)
    });
}).then(()=>setGetters(server));

