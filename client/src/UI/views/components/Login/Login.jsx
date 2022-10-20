import React, { useRef, useState } from "react"
import Logo from "../../../img/shymu-logo-1@2x.png";
import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Error from "../Error/ErrorFields";

import "./Login.css";
import "../../../../styleguide.css";

export default function Login() {
 const emailRef = useRef();
 const passwordRef = useRef();
 const { login } = useAuth();
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 async function handleSubmit(e) {
  e.preventDefault();

  try {
   setError("");
   setLoading(true);
   await login(emailRef.current.value, passwordRef.current.value);
   navigate("/dashboard");
  } catch {
   setError("Failed to log in");
  }

  setLoading(false);
 }

 return (
  <>
   <div className='LoginBG'>
    <div className='LoginCard'>
     <img className='ShymuLogin animate-enter' src={Logo} alt='SHYMU_LOGO 1' />
     <h2 className='WelcomeLogin'>Welcome Back!</h2>
     <p className='WelcomeLoginText'>Please enter your account here</p>
     {error && <Error variant='danger'>{error}</Error>}
     <form className='formLogin' onSubmit={handleSubmit}>
      <div className='inter-normal-dove-gray-15px' id='email'>
       <input
        placeholder='email'
        type='email'
        className='inputLogin'
        ref={emailRef}
        required
       />
      </div>
      <div className='inter-normal-dove-gray-15px' id='password'>
       <input
        placeholder='password'
        type='password'
        className='inputLogin'
        ref={passwordRef}
        required
       />
      </div>
      <input
       className='loginBtn inter-semi-bold-white-16px '
       type='submit'
       value='Log In'
      ></input>
     </form>
     <div className='mulish-medium-white-16px'>
      <Link to='/forgot-password'>Forgot Password?</Link>
     </div>
     <div className='mulish-medium-white-16px'>
      Need an account? <Link to='/signup'>Sign Up</Link>
     </div>
    </div>
   </div>
  </>
 );
}
