import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../service/auth.service';

const Signin = () => {
  const [user, setUser] = useState({
    //ต้องใช้ให้เหมือนกันหลังบ้าน
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();


  const handleInputChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleClick =  async (e) => {
    e.preventDefault(); //จะยกเลิกการทำงานเริ่มต้นของ event 
    try {
      const login = await AuthService.login(user.username,user.password);
      navigate("/") //เมื่อ signup successful จะไปหน้าแรก
    } catch (error) {
      console.log(error);
      setError(true);      
    }
  };
  
  const handleCancel = () => {
    setUser({
      username: "",
      password: "",
    });
    setError(false);
  };
  
  return (
    <div className="container text-center">
    <h1>Grab Restaurant</h1>
    <div className="form mx-auto">
      <form className="w-50 mx-auto">
        <h4 className="card-header justify-content-center ">LogIn</h4>
        <div className="md-3">
          <label htmlFor='username' className="form-label">Username</label>
          <input type="text" className="form-control" name="username" placeholder="username" value={user.username} onChange={handleInputChange}/>
        </div>
        <div className="md-3">
          <label htmlFor='password' className="form-label">Password</label>
          <input type="text" className="form-control" name="password" placeholder="Password"value={user.password} onChange={handleInputChange}/>
        </div>
        <Link to="" className="btn au btn-success" onClick={handleClick}>Log In</Link>
        <Link to="" className="btn au btn-danger" onClick={handleCancel}>Cancel</Link>    
      </form>
    </div>
  </div>
  )
}

export default Signin