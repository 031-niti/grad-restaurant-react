import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

const Card = ({restaurant}) => {
  return (
    <div className="Card">
        <div className="card" style={{width:"18rem"}} key={restaurant.id}>
            <img src={restaurant.imageURL} alt="" className="card-img top" />
            <div className="card-body">
                <h5 className="title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.type}</p>
                <Link to="" className="btn btn-danger px-2" onClick={() => {
                  handleDelete(restaurant.id);
                }} >Delete</Link>
              <Link to={`/update/${restaurant.id}`} className="btn btn-warning px-2">Edit</Link>
            </div>
        </div>
    </div>
  )
}

export default Card