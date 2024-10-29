const router=require("express").Router();
let User=require("../models/user-model");



router.get("/",async(req,res)=>{
    try{
        const data=await User.find();
        res.json(data)

    }catch(error){
        res.status(400).json("Error"+ error)

    }
})

router.post("/add",async (req,res)=>{
    try{
        const username=req.body.username;
        const newUser=new User({username})
        newUser.save()
        res.json("User Addeed")

    }catch(error){
        res.status(400).json("Error"+error)

    }
} )


module.exports=router;