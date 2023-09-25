import React, { useState }from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const[user, setUser] = useState({
        user : "",
        email : "",
        password: ""
        
      })

    const handleCancel = () => {
        setRestaurant({
        name: "",
        type: "",
        imageURL: ""
        })
        setError(false);
    }  
  return (
    <div className="container text-center">
    <h1>Grab Restaurant</h1>
    <div className="form mx-auto">
      <form className="w-50 mx-auto">
        <h4 className="card-header justify-content-center ">Sing Up</h4>
        <div className="md-3">
          <label htmlFor='username' className="form-label">Username</label>
          <input type="text" className="form-control" name="username" placeholder="Username"/>
        </div>
        <div className="md-3">
          <label htmlFor='email' className="form-label">Email</label>
          <input type="text" className="form-control" name="email" placeholder="Email"/>
        </div>
        <div className="md-3">
          <label htmlFor='password' className="form-label">Password</label>
          <input type="text" className="form-control" name="password" placeholder="Password"/>
        </div>
        <div className="md-3">
          <label htmlFor='password' className="form-label">Confirm Password</label>
          <input type="text" className="form-control" name="password" placeholder="Confirm Password"/>
        </div>
        <Link to="" className="btn au btn-success" >Sing Up</Link>
        <Link to="" className="btn au btn-danger" onClick={handleCancel}>Cancel</Link>
      </form>
    </div>
  </div>
  )
}

export default SignUp