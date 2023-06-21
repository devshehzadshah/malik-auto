import React, { useState } from 'react';
import Loginimage from '../assets/login.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();
  const userLogin = () => {
      signInWithEmailAndPassword(auth, email,password)
      .then((userCredential)=> {
        console.log(userCredential);
        navigate('/Allproducts');
      })
      .catch((error)=>{
        console.log(error)
      });
  }
  return (
    <div className='row'>
      <div className='col-sm-8 px-0'>
        <img className='img-fluid' alt='imglogin' src={Loginimage} />
      </div>
      <div className='col-sm-4'> 
        <div className='h-100 d-flex'>
          <div className="m-auto">
            <h3 className='malick'>Login to Malik Autos</h3>
            <label>Enter Your Email</label>
            <input type='email' className='form-control custom_control' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <label>Enter Your Password</label>
            <input type='password' className='form-control custom_control' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <div className='text-center'>
            <button className='btn btn-dark mt-2' onClick={userLogin}>Login</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
