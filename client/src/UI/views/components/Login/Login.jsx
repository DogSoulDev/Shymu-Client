import React, { useRef, useState } from "react"

import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

import "./Login.css";
import "./styleguide.css";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <div className="LoginCard">
          <h2 className="plusjakartasans-extra-bold-ship-gray-48px">Log In</h2>
          {error && <alert variant="danger">{error}</alert>}
          <form onSubmit={handleSubmit}>
            <form className="inter-normal-aztec-24px" id="email">
              <label for="email" >Email</label>
              <input className="inputField" type="email" ref={emailRef} required />
            </form>
            <group className="inter-normal-aztec-24px" id="password">
              <label>Password</label>
              <input className="inputField" type="password" ref={passwordRef} required />
            </group>
            <input className="loginBtn inter-semi-bold-white-16px " type="submit" value="Log In"></input>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      
    </>
  )
}
