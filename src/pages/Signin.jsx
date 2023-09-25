import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
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
        <h4 className="card-header justify-content-center ">Sing In</h4>
        <div className="md-3">
          <label htmlFor='name' className="form-label">Email</label>
          <input type="text" className="form-control" name="name" placeholder="Email"/>
        </div>
        <div className="md-3">
          <label htmlFor='type' className="form-label">password</label>
          <input type="text" className="form-control" name="type" placeholder="Password"/>
        </div>
        <Link to="" className="btn au btn-success" >Sing In</Link>
        <Link to="" className="btn au btn-danger" onClick={handleCancel}>Cancel</Link>    
      </form>
    </div>
  </div>
  )
}

export default Signin