import axios from 'axios'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();
  const [error, setError] = useState();

  //handleInputChange จะรับค่าจากฟอร์มและอัปเดต state user
  const handleInputChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  //เมื่อกด handleCancel จะทำการอัปเดต state และกำหนดค่าของทุกฟิลด์ให้เป็นค่าว่าง
  const handleCancel = () => {
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError(false);
  };

  const handleClick = (e) => {
    e.preventDefault(); //ใช้ในการยกเลิกการทำงานเริ่มต้น
    try {
      //เช็คว่า user กรอกครบไหม ถ้าไม่จะ error  
      if (!user.username ||!user.email || !user.password || !user.confirmPassword) {
        setError(true);
        return;
      }
      setError(false);

      //ทำการ log ข้อมูล user ที่มีค่าเป็น state 
      console.log("Submitting:", user);
      alert("สมัครสมาชิกสำเร็จแล้วนะจ้ะ!!");
      //เมื่อ signup successful จะไปหน้า Signin
      navigate("/Signin")
    } catch (error) {
      console.log(error);
      setError(true);      
    }
  };

  return (
    <div className="container text-center">
      <h1>Grab Restaurant</h1>
      <div className="form mx-auto">
        <form className="w-50 mx-auto" >
          <h4 className="card-header justify-content-center ">Sign Up</h4>
          <div className="md-3">
            <label htmlFor="username" className="form-label"> Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" value={user.username} onChange={handleInputChange}/>
          </div>
          <div className="md-3">
            <label htmlFor="email" className="form-label"> Email </label>
            <input type="text" className="form-control" name="email" placeholder="Email"value={user.email}onChange={handleInputChange}/>
          </div>
          <div className="md-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" className="form-control" name="password" placeholder="Password" value={user.password} onChange={handleInputChange}/>
          </div>
          <div className="md-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="text" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleInputChange}/>
          </div>

          {/* แสดงข้อความ error ในฟอร์ม ถ้ามี error ใช้ Bootstrap alert */}
          {error && (
            <div className="alert alert-danger" role="alert">
              ข้อมูลไม่ถูก ไปกรอกใหม่!!
            </div>
          )}
          <Link type="submit" className="btn au btn-success" onClick={handleClick}>Sign Up</Link>
          <Link type="button" className="btn au btn-danger" onClick={handleCancel}>Cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
