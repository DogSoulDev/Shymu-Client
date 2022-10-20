
import React, { useRef, useState } from "react"
import Logo from "../../../img/shymu-logo-1@2x.png";
import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

import "../Login/Login.css";




export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <>
      <div className="LoginBG" >
        <div className="LoginCard">
          <img className="ShymuLogin animate-enter" src={Logo} alt="SHYMU_LOGO 1" />
          <h2 className="WelcomeLogin">Become one of us</h2>
          <p className="WelcomeLoginText">Create account to continue</p>
          {error && <alert variant="danger">{error}</alert>}
          <form className="formLogin" onSubmit={handleSubmit}>
          <group className="inter-normal-dove-gray-15px" id="email">
              <input placeholder="Email" type="email" className="inputLogin" ref={emailRef} required />
              {/* <div type="email" ref={emailRef} required /> */}
            </group>
            <group className="inter-normal-dove-gray-15px" id="password">
              <input placeholder="Password" type="password" className="inputLogin" ref={passwordRef} required />
            </group>
            <group className="inter-normal-dove-gray-15px" id="password-confirm">
              <input placeholder="Password Confirmation" type="password" className="inputLogin" ref={passwordConfirmRef} required />
            </group>
            <input  className="loginBtn inter-semi-bold-white-16px " type="submit" value="Sign Up"></input>
          </form>
          <div className="mulish-medium-white-16px">
          Already have account? <Link to="/login">Log In</Link>
         </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In <Link to="/login">Log In</Link>
      </div>
    </>
  )
}