import React,{useState,useEffect} from 'react'
import axios from "axios"
const CreateExercises = () => {
    const [state,setState]=useState(
        {
        username:"",
        description:"",
        duration:"",
        date:new Date(),
        users:[]
    }
    
    )
    const handelChange=(e)=>{
        const {name,value}=e.target;
        setState(preVal=>{
            return{
                ...preVal,
                [name]:value
            }


        })
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const exercise={
            username:state.username,
            description:state.description,
            duration:state.duration,
            date:state.date
        }
        window.location="/"
        console.log(exercise)
        axios.post("http://localhost:5000/exercises/add",exercise).then(res=>console.log(res.data))
    }


    
  useEffect(() => {
    axios.get("http://localhost:5000/users/").then(res=>{
      const all_data=res.data
      const users=all_data.map((user,i)=>{
        const username=[]
         username[i]=user.username;
        return username

      })
      setState(pre=>{
        return{
          ...pre,
            users:users
        }
      })
    })

  },[]);
    
console.log(state.users)
      
  return (
    <div>
        
        <h3>Create New Exercise Log</h3>
       
  <div className="form-group">
    <label for="exampleInputEmail1">UserName</label>
    <br/>
    <br/>
    <select value={state.username} onChange={handelChange} name="username">
        {
            state.users.map((item,index)=>{
                return <option value={item} >{item}</option>
            })
        }
    </select>
    <br/>
    <br/>
    
  </div>
  <div className="form-group">
    <label htmlfor="description">Description</label>
    <input type="text" className="form-control" id="description" style={{width:"70%",margin:'10px 30px'}} name="description" value={state.description
    } onChange={handelChange}  />
  </div>
  <div className="form-group">
    <label htmlfor="duration">Duration</label>
    <input type="number" className="form-control" id="duration"  style={{width:"70%",margin:'10px 30px'}} name="duration" onChange={handelChange}  />
  </div>


  <div className="form-group">
    <label htmlfor="date">Date</label>
    <input type="date" className="form-control" id="date" style={{width:"70%",margin:'10px 30px'}} name="date" onChange={handelChange} />
  </div>
  <br/>
  <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default CreateExercises