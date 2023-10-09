import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../service/auth.service'

function NavBar() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-tertiary bg-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Grad Restaurant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Add">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Search">Search</Link>
                        </li>
                    </ul>
                    {/* Signin SignUp */}
                    
                    <span className="navbar-text">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign in</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/signup">Sign up</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/Logout">Log out</Link>
                        </li>
                      </ul>
                    </span>
                </div>
            </div>
        </nav>
    )
}
export default NavBar