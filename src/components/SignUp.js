import React, { useState } from 'react';
import Loginimage from '../assets/login.png'
import { createUserWithEmailAndPassword , signInWithPopup} from 'firebase/auth';
import { auth , googleprovider } from './Config';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errormsg, seterrormsg] = useState('');

  const registerUser = async(e) => {
    try{
    const user = await createUserWithEmailAndPassword(auth,
      registerEmail,
      registerPassword
      );
      navigate('/login')
      console.log(user);
  } catch(error){
    seterrormsg(error.message);
  }
  }
  const signInWithGoogle = async() => {
    try{
    const user = await signInWithPopup(auth, googleprovider)
  }catch(error){
    console.log(error.message)
  }
  }
  return (
    <div className='row'>
    <div className='col-sm-8 px-0'>
      <img className='img-fluid' alt='imglogin' src={Loginimage} />
    </div>
    <div className='col-sm-4'> 
      <div className='h-100 d-flex'>
        <div className="m-auto">
          <h3 className='malick'>SignUp to Malik Autos</h3>
          <label>Enter Your Email</label>
          <input type='email' className='form-control custom_control' placeholder='Email' onChange={(e)=>setRegisterEmail(e.target.value)} />
          <label>Enter Your Password</label>
          <input type='password' className='form-control custom_control' placeholder='Password'onChange={(e)=>setRegisterPassword(e.target.value)}/>
          <p className='text-danger'>{errormsg}</p>
          <div className='text-center'>
          <button className='btn btn-dark mt-2' onClick={registerUser}>signup</button> <br/>
          <button className='btn btn-primary mt-2' onClick={signInWithGoogle}>SignUp with Google</button>
          </div>
        </div>
     
      </div>

    </div>
  </div>
  );
}

export default SignUp;