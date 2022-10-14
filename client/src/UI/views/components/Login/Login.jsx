import React, { useRef, useState } from "react"

import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

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
        <div>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <alert variant="danger">{error}</alert>}
          <div onSubmit={handleSubmit}>
            <div id="email">
              <div>Email</div>
              <div type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <div>Password</div>
              <div type="password" ref={passwordRef} required />
            </div>
            <div disabled={loading} className="w-100" type="submit">
              Log In
            </div>
          </div>
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
