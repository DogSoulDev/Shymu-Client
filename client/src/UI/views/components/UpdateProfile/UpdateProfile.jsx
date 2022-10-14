import React, { useRef, useState } from "react"
import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <alert variant="danger">{error}</alert>}
          <div onSubmit={handleSubmit}>
            <div id="email">
              <div>Email</div>
              <div
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password">
              <div>Password</div>
              <div
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div id="password-confirm">
              <div>Password Confirmation</div>
              <div
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div disabled={loading} className="w-100" type="submit">
              Update
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <Link to="/dashboard">Cancel</Link>
      </div>
    </>
  )
}
