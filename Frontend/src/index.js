import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from "react-router-dom"
import EditExercises from './components/edit-exercise.component';
import ExercisesList from './components/exercises-list.component';
import CreateExercises from "./components/create-exercise.component"
import Navbar from "./components/Navbar"
import CreateUser from "./components/craete-user.component"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<div className="container">




    <App />


    <Routes>

<Route path="/" exact  element={<ExercisesList/>}/>
<Route path="/edit:id" exact  element={<EditExercises/>}/>
<Route path="/create" exact  element={<CreateExercises/>}/>
<Route path="/user" exact  element={<CreateUser/>}/>




    </Routes>
</div>
    </BrowserRouter>
  </React.StrictMode>
);

