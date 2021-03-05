const express=require('express');
const { router } = require('../app');
const routes=express.Router();
const mongoose=require('mongoose');
const driver=require('../model/driver');
const bodyparser=require('body-parser');
routes.get('/',(req,res,next)=>{
    res.status(200).json({"mes":"kl"});
});
routes.post('/',(req,res,next)=>{
    const Driver=new driver({
        Name:req.body.Name,
        Team:req.body.Team,
        Races:req.body.Races,
        Pole:req.body.Pole,
        Wins:req.body.Wins,
        Championship:req.body.Championship,
        Driver_Number:req.body.number
    });
    Driver.save().
    then(result=>{res.status(200).json({"Driver":result});})
    .catch(error=>{res.status(400).json({"err":error});})
});
routes.get("/all",(req,res,next)=>{
    driver.find().exec().then(doc=>{res.status(200).json(doc)}).catch(err=>{console.log(err);});
});
routes.get('/:name',(req,res,next)=>{
    const name=req.params.name;
    driver.findOne({Name:name},(err,doc)=>{
        if(doc){
        res.status(200).json({doc});
    }
    else{
        res.status(400).json({"Error":err});
    }
});
});
module.exports=routes;