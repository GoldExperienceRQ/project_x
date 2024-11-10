const express = require("express");
const GenericService = require("../../service/GenericService");
const Visitor_Event = require("../../models/Visitor_Event");

const db=new GenericService(Visitor_Event);
const router=express.Router();


router.get('/', async (req, res)=>{
    let data=[];
    try{
        data= await db.getAll().exec();
    }catch (er)
    {
        console.log(er);
        data=[];
    }
    res.json(data);
});

router.get('/:id', async (req, res)=>{
    let data=[] 
    try{
        data= await db.getById(req.params.id).exec();
        if (data==null) 
            data=[]
    }catch (er)
    {
        console.log(er);
        data=[];
    }
     

    res.json(data);
});


router.patch('/:id', async (req, res)=>{
    try{
        
        let result=await db.patchEntry(req.params.id, req.body);
        console.log(result);
        if (!result){
            res.status(404).json({message: "Not found"});
            return;
        } 
        res.status(200).json(result);
    }catch (er)
    {
        console.log(er);
        res.status(500).json(er);
    }
});


router.delete('/:id', async (req, res)=>{
    try{
        let result=await db.deleteById(req.params.id);
        console.log(result);
        if (!result){
            res.status(404).json({message: "Not found"});
            return;
        } 
        res.status(200).json(result);
    }catch (er)
    {
        console.log(er);
        res.status(500).json(er);
    }
})

router.post('/', async (req, res)=>{
    try{
        let result=db.add(req.body);
        res.status(200).json(result);
    }catch(er)
    {
        console.log(er);
        res.status(500).json(er);
    }
});


module.exports = router