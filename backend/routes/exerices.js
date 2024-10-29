const router=require("express").Router();
let Exercise=require("../models/exercise-model");



router.get("/",async(req,res)=>{
    try{
        const data=await Exercise.find();
        res.json(data)

    }catch(error){
        res.status(400).json("Error"+ error)

    }
})

router.post("/add",async (req,res)=>{
    try{
        const username=req.body.username;
        const description=req.body.description;
        const duration=req.body.duration;
        const date=Date.parse(req.body.date)
        const newExercise=new Exercise({username,description,duration,date})
        newExercise.save()
        res.json("User Addeed")

    }catch(error){
        res.status(400).json("Error"+error)

    }
} )

router.get("/:id",async(req,res)=>{
    try{
        const data=await Exercise.findById(req.params.id);
        res.json(data)

    }catch(error){
        res.status(400).json("Error" +error )

    }
} )


router.delete("/:id",async (req,res)=>{
    try{
        Exercise.findByIdAndDelete(req.params.id);
        res.json("Delted")

    }catch(error){
        res.status(400).json("Error" + error)

    }
})


router.post("/update/:id",async (req,res)=>{
    try{
        const username=req.body.username;
        const description=req.body.description;
        const duration=req.body.duration;
        const date=Date.parse(req.body.date)
        const data=await Exercise.findByIdAndUpdate(req.params.id,{
           username,
           description,
           duration,
           date 
        })
        data.save()
        res.json("Exercise Update")

    }catch(error){
        res.status(400).json("Error" + error) 
        

    }
})
module.exports=router;