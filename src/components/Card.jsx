import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { Button } from 'bootstrap'
import { useAuthContext } from '../context/AuthContext'

const Card = ({restaurant, handleDelete}) => {
  const { user } = useAuthContext();
  return (
    <div className="Card">
        <div className="card" style={{width:"18rem"}} key={restaurant.id}>
            <img src={restaurant.imageURL} alt="" className="card-img top" />
            <div className="card-body">
                <h5 className="title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.type}</p>
                {user && user.roles.includes("ROLES_ADMIN")&&(
                  <>
                    <Link to={`/update/${restaurant.id}`} className="btn btn-warning btn-home">Edit</Link>
                    <Link to="" className="btn btn-danger btn-home" onClick={() => {
                    handleDelete(restaurant.id);
                    }} >Delete</Link>
                  </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Card