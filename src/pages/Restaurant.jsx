import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth:{
    username : USERNAME,
    password : PASSWORD,
  },
};

const Restaurant = () => {
  const [restaurants,setRestaurants] = useState([])
  useEffect(()=>{
    const fetchAllRestaurants = async () => {
      try {
        const res = await axios.get(`${URL}/restaurant`, config)
        setRestaurants(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllRestaurants();
  },[])
  return (
    <div>Restaurant</div>
  )
}

export default Restaurant