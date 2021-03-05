const express=require('express');
const app=express();
const driverroutes=require("./api/driver");
const morgan=require('morgan');
const bodyparser=require('body-parser');
app.use(morgan('dev'));
app.use(bodyparser.json());
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://maxf1:"+"maxf1"+"@cluster0.qfdal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useMongoClient:true
});
app.use('/driver',driverroutes);
app.use((req,res,next)=>{
    res.status(200).json({"message":"Done"});
});
module.exports=app;