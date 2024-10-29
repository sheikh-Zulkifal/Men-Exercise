const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minlenght:3
    }
})

const User=mongoose.model("User",userSchema)
module.exports=User