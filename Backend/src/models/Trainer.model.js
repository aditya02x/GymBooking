const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,


    },
    specialization:{
        type:String,
        required:true


    },
    experience:{
        type:Number,
        required:true
    },
    pricePerSession:{
        type:Number,
        required:true
    },
    availableslots:[{date:String,time:String}]
},{timestamps:true})


module.exports=mongoose.model("Trainer",trainerSchema)