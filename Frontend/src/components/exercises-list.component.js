import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "../App.css"
const ExerciseList = () => {
 const [state,setState]=useState({
  exercise:[]
 })
useEffect(()=>{
  axios.get("http://localhost:5000/exercises/").then(exercises=>{
    setState({
      exercise:exercises.data
    })
  })
},[])
const deleteList=(id)=>{
  axios.delete("http://localhost:5000/exercises/"+id).then(res=>console.log(res.data))
  const format_data=state.exercise.filter((items)=>{
    return items._id !== id;

  })
  setState({
    exercise:format_data
  })


}
 return (
    <div className='mt-5'>
      <table className='tabel' style={{border:"2px solid black"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Time</th>
          </tr>
            </thead>
          <tbody>
            {
              state.exercise.map(exercise=>{
                return (
                  <>
                  <tr>
                    <td>{exercise.username}</td>
                    <td>{exercise.description}</td>
                    <td>{exercise.duration}</td>
                    <td>{exercise.date}</td>
                    <td>

                      <a onClick={()=>deleteList(exercise._id)}>Delete It</a>
                    </td>



                  </tr>
                  
                  </>
                )
              })
            }
          </tbody>

      </table>
    </div>
  )
}

export default ExerciseList