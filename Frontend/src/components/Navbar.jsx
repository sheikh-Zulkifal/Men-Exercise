import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav  className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
  <div  className="container">
    <Link  className="navbar-brand" to="/">Exercise tracker</Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/">Exercises</Link>
        </li>
        <li  className="nav-item">
          <Link  className="nav-link" to="/create">Create Exercises Log</Link>
        </li>
        <li  className="nav-item">
          <Link  className="nav-link" to="/user">Create User</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar