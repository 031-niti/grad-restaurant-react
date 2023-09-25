import React, { useState } from 'react'
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
  const [search, setSearch] = useState();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
       
    } catch (error) {
        console.log(error);
    }
};
  
  return (
    <div className="search w-50 mx-auto">
      <form className="d-flex" role="search">
        <input className="form-control me-2" name="search" placeholder="Search" aria-label="Search" />
        <Link className="btn btn-outline-success" onClick={handleSearch}>Search</Link>
      </form>
    </div>  
  )
}

export default Search