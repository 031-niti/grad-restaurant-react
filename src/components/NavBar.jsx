import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../service/auth.service'
import { useAuthContext } from '../context/AuthContext'

const NavBar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/Signin");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-tertiary bg-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Grad Restaurant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {user && user.roles.includes("ROLES_ADMIN") &&(
              <li className="nav-item">
                <Link className="nav-link" to="/Add">
                  Add
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/Search">
                  Search
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">
                  Proflie
                </Link>
              </li>
            )}
          </ul>

          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Sign in
                  </Link>
                </li>
              )}
              {!user && (
                <li className="nav-item ">
                  <Link className="nav-link" to="/signup">
                    Sign up
                  </Link>
                </li>
              )}
              {user && (
                <li className="nav-item ">
                  <span className="badge">
                    Welcome, <span className="username">{user.username}</span>
                  </span>
                  <Link
                    className="nav-link"
                    to="/signin"
                    onClick={handleLogout}
                  >
                    Log out
                  </Link>
                </li>
              )}
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar