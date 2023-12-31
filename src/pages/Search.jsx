import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};

const Search = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${url}/restaurants`, {
        params: {
        search: searchTerm,
        },
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

 useEffect(() => {
 }, []);
  
  return (
    <div className="search w-50 mx-auto">
      <form className="d-flex" role="search">
        <input className="form-control me-2" name="search" placeholder="Search" aria-label="Search" onClick={handleSearchTermChange}/>
        <Link className="btn btn-outline-success" onClick={handleSearch}>Search</Link>
      </form>
      {error && <p>Error occurred while searching.</p>}
      <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <Link to={`/restaurant/${restaurant.id}`}>
                  {restaurant.name} - {restaurant.type}
                </Link>
              </li>
            ))}
          </ul>
    </div>  
  )
}

export default Search