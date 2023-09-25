import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();


  const handleInputChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleClick =  (e) => {
    e.preventDefault(); //จะยกเลิกการทำงานเริ่มต้นของ event 
    try {
      //เช็คว่าข้อมูลที่ user กรอกครบถ้วนหรือไม่ ถ้าข้อมูลยังไม่ครบ จะตั้งค่า state error เป็น true และให้กลับไปจบฟังก์ชัน  
      if (!user.email || !user.password) {
        setError(true);
        return;
      }
      setError(false);
      console.log("User data:", user); //ทำการ log ข้อมูล user ที่มีค่าเป็น state 
      navigate("/") //เมื่อ signup successful จะไปหน้าแรก
      alert("เข้าสู่ระบบสำเร็จแล้วนะจ้ะ!!");
    } catch (error) {
      console.log(error);
      setError(true);      
    }
  };
  
  const handleCancel = () => {
    setUser({
      email: "",
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
          <label htmlFor='email' className="form-label">Email</label>
          <input type="text" className="form-control" name="email" placeholder="Email" value={user.email} onChange={handleInputChange}/>
        </div>
        <div className="md-3">
          <label htmlFor='password' className="form-label">Password</label>
          <input type="text" className="form-control" name="password" placeholder="Password"value={user.password} onChange={handleInputChange}/>
        </div>
        {error && (
            <div className="alert alert-danger" role="alert">
              ข้อมูลไม่ถูก ไปกรอกใหม่!!
            </div>
          )}
        <Link to="" className="btn au btn-success" onClick={handleClick}>Log In</Link>
        <Link to="" className="btn au btn-danger" onClick={handleCancel}>Cancel</Link>    
      </form>
    </div>
  </div>
  )
}

export default Signin