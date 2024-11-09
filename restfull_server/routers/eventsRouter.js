const express = require("express");
const GenericService = require("../../service/GenericService");
const Event = require("../../models/Event");

const db=new GenericService(Event);
const router=express.Router();


router.get('/', async (req, res)=>{
    let data= await db.getAll().exec();
    res.json(data);
});


module.exports = router