import React, {useState} from 'react'

import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"



export default function Dashboard() {
 const [error, setError] = useState("");
 const { currentUser, logout } = useAuth();
 const navigate = useNavigate();

 async function handleLogout() {
  setError("");

  try {
   await logout();
   navigate("/");
  } catch {
   setError("Fail to log out");
  }
 }

 return (
  <>
      <div>
        <div>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <alert variant="danger">{error}</alert>}
          <strong>Hello </strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Your Profile
          </Link>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <div variant="link" onClick={handleLogout}>
          Log Out
        </div>
      </div>
    </>
  )
}
