import React, { useState } from "react";
import "./Login.css";
import Logo from "../../../img/Logo.png";
import Dashboard from "../Dashboard/Dashboard";


function Login() {
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
            <a href='#'>Forgot Password ?</a>
            <a href='#'> SignUp </a>
          </div>
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );

  /* Redirection location when user is correct. Change later */
  return (
    <div className='login-form'>{isSubmitted ? <Dashboard /> : renderForm}</div>
  );
}

export default Login;
