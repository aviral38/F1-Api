const mongoose=require('mongoose');
const driverSchema=mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    Name:String,
    Team:String,
    Races:String,
    Pole:Number,
    Wins:Number,
    Championship:Number,
    Driver_Number:Number,
});
module.exports=mongoose.model('driver',driverSchema);