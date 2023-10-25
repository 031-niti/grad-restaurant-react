import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import authHeader from '../service/auth.header';
import api from '../service/api'

const Add = () => {
  const[restaurant, setRestaurant] = useState({
    name : "",
    type: "",
    imageURL: ""
  })
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setRestaurant((prev)=> ({...prev, [e.target.name]:e.target.value}));
  }

  const handleClick = async (e) =>{
    e.preventDefault();
    try {
      await api.post(`/restaurant`, restaurant);
      navigate("/")
    } catch (error) {
      console.log(error);
      setError(true);      
    }
  }
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
      <div className="error">{error && "somthing went wrong !!"}</div>
      <div className="form mx-auto">
        <form className="w-50 mx-auto">
          <h5 className="card-header justify-content-center ">Add new restaurant</h5>
          <div className="md-3">
            <label htmlFor='name' className="form-label">Restaurant name</label>
            <input type="text" className="form-control" name="name" placeholder="Restaurant name" onChange={handleChange} value={restaurant.name}/>
          </div>
          <div className="md-3">
            <label htmlFor='type' className="form-label">Restaurant Type</label>
            <input type="text" className="form-control" name="type" placeholder="Restaurant Type" onChange={handleChange} value={restaurant.type} />
          </div>
          <div className="md-3">
            <label htmlFor='imageURL' className="form-label">Restaurant ImageURL</label>
            <input className="form-control" name="imageURL" placeholder="Restaurant ImageURL" onChange={handleChange} value={restaurant.imageURL} />
          </div>
          <Link to="" className="btn au btn-success" onClick={handleClick}>Add</Link>
          <Link to="" className="btn au btn-danger" onClick={handleCancel}>Cancel</Link>
        </form>
      </div>
    </div>
  )
}

export default Add