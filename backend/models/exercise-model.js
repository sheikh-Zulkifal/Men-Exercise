const mongoose=require("mongoose")

const exerciseSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

const Exercise=mongoose.model("Exerices",exerciseSchema)
module.exports=Exercise