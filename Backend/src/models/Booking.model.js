const mongoose =require('mongoose')
const { applyTimestamps } = require('./User.model')

const bookingSchema = new mongoose.Schema({
    memberId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    trainerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trainer",
        required:true

    },
    date:{
        type:String,
        required:true

    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","confirmed","cancelled" ],
        default:"pending"
    }

},{timestamps:true});

module.exports = mongoose.model("Booking",bookingSchema)