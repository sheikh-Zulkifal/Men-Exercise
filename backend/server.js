const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose")
require("dotenv").config();
const app=express()
app.use(express.json())
app.use(cors());
const uri=process.env.ATLAS_URL;
const port =process.env.PORT || 5000
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

const exerciseRouter=require("./routes/exerices");
const usersRouter=require("./routes/user")

app.use("/exercises",exerciseRouter);
app.use("/users",usersRouter)
app.listen(port,()=>{
console.log("Server is listening on "+ port );
})