import React,{useState} from 'react'
import axios from 'axios'

const CreateUser = () => {
    const [state,setState]=useState({
        username:""
    })
    const handelChange=(e)=>{
        setState(pre=>{
            return{
                ...pre,
                [e.target.name]:e.target.value
            }
        })
        console.log(state)
    }
    const onSubmit=(e)=>{
        const user={
            username:state.username
        }
        window.location="/"
        console.log(user);
        axios.post('http://localhost:5000/users/add',user).then(res=>console.log(res.data))
    }
  return (
    <div>
        <h3>Create New User</h3>
        <div className="form-group">
    <label htmlfor="username">Username</label>
    <input type="text" className="form-control" id="username" style={{width:"70%",margin:'10px 30px'}} name="username" value={state.username
    } onChange={handelChange}  />
  </div>
  
  <div className="form-group">
  <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
     </div>

    </div>
  )
}

export default CreateUser