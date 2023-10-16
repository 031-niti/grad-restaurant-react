import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import authHeader from '../service/auth.header';

//ดึง config มาจาก config ไฟล์
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
    headers: authHeader()
};
const Update = () => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        type: "",
        imageURL: ""
    })
    const navigate = useNavigate();
    const [error, setError] = useState();
    const {restaurantId} = useParams();

    const handleChange = (e) => {
        setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await axios.get(`${URL}/restaurant/${restaurantId }`, config );
                setRestaurant(res.data); // update state
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllRestaurants();
    },[restaurantId]);

    //เมื่อคลิ๊กจะอัพเดท
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${URL}/restaurant/${restaurantId}`, restaurant, config);
            navigate("/")
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

  return (
      <div className="container text-center">
          <h1>Grab Restaurant</h1>
          <div className="error">{error && "somthing went wrong !!"}</div>
          <div className="form mx-auto">
              <form className="w-50 mx-auto">
                  <h5>Update new restaurant</h5>
                  <div className="md-3 ">
                      <label htmlFor='name' className="form-label">Restaurant name</label>
                      <input type="text" className="form-control" name="name" placeholder="Restaurant name" onChange={handleChange} value={restaurant.name} />
                  </div>
                  <div className="md-3">
                      <label htmlFor='type' className="form-label">Restaurant Type</label>
                      <input type="text" className="form-control" name="type" placeholder="Restaurant Type" onChange={handleChange} value={restaurant.type} />
                  </div>
                  <div className="md-3">
                      <label htmlFor='imageURL' className="form-label">Restaurant ImageURL</label>
                      <input className="form-control" name="imageURL" placeholder="Restaurant ImageURL" onChange={handleChange} value={restaurant.imageURL} />
                  </div>
                  <Link to="" className="btn au btn-success" onClick={handleClick}>Update</Link>
                  <Link to="" className="btn au btn-danger" >Cancel</Link>
              </form>
          </div>
      </div>
  )
}

export default Update