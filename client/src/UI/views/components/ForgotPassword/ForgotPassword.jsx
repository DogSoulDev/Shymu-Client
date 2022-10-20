import React, { useRef, useState } from "react"
import Logo from "../../../img/shymu-logo-1@2x.png";
import { useAuth } from "../../../../contexts/AuthContext"
import { Link } from "react-router-dom"

import "../Login/Login.css";

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="LoginBG" >
        <div className="LoginCard">
          <img className="ShymuLogin animate-enter" src={Logo} alt="SHYMU_LOGO 1" />
          <h2 className="WelcomeLogin">Password Reset</h2>
          <p className="WelcomeLoginText">Don't worry, happens to the best of us.</p>
          {error && <alert variant="danger">{error}</alert>}
          {message && <alert variant="success">{message}</alert>}
          <form className="formLogin" onSubmit={handleSubmit}>
            <group className="inter-normal-dove-gray-15px" id="email">
              <input placeholder="Your email" type="email" className="inputLogin" ref={emailRef} required />
            </group>
            <input  className="loginBtn inter-semi-bold-white-16px " type="submit" value="Email me a recovery link"></input>
          </form>
          <div className="mulish-medium-white-16px">
          Already have account? <Link to="/login">Log In</Link>
         </div>
        </div>
      </div>
    </>
  )
}
