import React, { useState } from "react";
import "./Login.css";
import Logo from "../../../img/SHYMU_LOGO.png";
// import Dashboard from "../../pages/Dashboard/Dashboard";
// import Register from "../SignUp/Register"
// import {Link} from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate()
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleLogin = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === username.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "userpass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "username", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className='body'>
      <img src={Logo} alt='Logo' />
      <div className='box'>
        <form className='singInForm' onSubmit={handleLogin}>
          <h1>Let's get you in!</h1>
          <div className='inputBox'>
            <input
              type='text'
              name='username'
              autoComplete='off'
              required
            />
            <span>UserName</span>
            <i></i>
          </div>
          {renderErrorMessage("username")}

          <div className='inputBox'>
            <input
              type='password'
              name='pass'
              autoComplete='new-password'
              required
            />

            <span>Password</span>
            <i></i>
          </div>
          {renderErrorMessage("userpass")}
          <div className='links'>
          <input
          type='link'
          value='SingUp'
          className='card__btn'
          onClick={()=> navigate("/register")}
        />
          </div>
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );

  /* Redirection location when user is correct. Change later */
  return (
    <div className='login-form'>{isSubmitted ? <Navigate replace to="/dashboard" /> : renderForm}</div>
  );
}

export default App;
