
import React, { useRef, useState } from "react"
import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Error from "../Error/ErrorFields"



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
      <div>
        <div>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <div id="password-confirm">
              <div>Password Confirmation</div>
              <div type="password" ref={passwordConfirmRef} required />
            </div>
            <div disabled={loading} className="w-100" type="submit">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In <Link to="/login">Log In</Link>
      </div>
    </>
  )
}